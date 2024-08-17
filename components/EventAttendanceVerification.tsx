import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import eventIdsData from "../event_ids.json";
import axios from "axios";

const { eventIds } = eventIdsData;

interface POAPEvent {
  event: {
    id: string;
    name: string;
    image_url: string;
    start_date: string;
  };
  token_id: string;
}

interface EventAttendanceProofProps {
  onVerified: () => void;
  setPoaps: (poaps: POAPEvent[]) => void;
  userAddress: string;
}

const EventAttendanceProof: React.FC<EventAttendanceProofProps> = ({ onVerified, setPoaps, userAddress }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [proofResult, setProofResult] = useState<string | null>(null);
  const [localPoaps, setLocalPoaps] = useState<POAPEvent[]>([]);
  const [missingPoaps, setMissingPoaps] = useState<string[]>([]);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});
  const [manualAddress, setManualAddress] = useState<string>("");

  // ENS resolution is no longer needed as we're using the provided userAddress

  const fetchPOAPs = useCallback(
    async (addressToFetch: string) => {
      // Address validation is now handled before calling this function

      setIsVerifying(true);
      setProofResult(null);
      setLocalPoaps([]);
      setMissingPoaps([]);

      const maxRetries = 3;
      let retries = 0;

      while (retries < maxRetries) {
        try {
          console.log(`Fetching POAPs for address: ${addressToFetch} (Attempt ${retries + 1})`);
          const response = await axios.get(
            `/api/fetchPoaps?address=${encodeURIComponent(addressToFetch.toLowerCase())}`,
          );
          console.log("API response:", JSON.stringify(response.data, null, 2));

          const { poaps = [] } = response.data;

          // Ensure poaps is always an array
          const validPoaps = Array.isArray(poaps) ? poaps : [];

          // Filter POAPs for ETHGlobal Brussels 2024
          const filteredPoaps = validPoaps.filter(isEthGlobalBrusselsPOAP);

          function isEthGlobalBrusselsPOAP(poap: POAPEvent): boolean {
            const eventDate = new Date(poap.event.start_date);
            return (
              poap.event.name.toLowerCase().includes("ethglobal brussels") &&
              poap.event.name.toLowerCase().includes("2024") &&
              eventDate.getFullYear() === 2024 &&
              eventDate >= new Date("2024-07-11") &&
              eventDate <= new Date("2024-07-14")
            );
          }

          console.log("Filtered POAPs:", filteredPoaps);

          setLocalPoaps(filteredPoaps);
          setPoaps(filteredPoaps);

          // Set missing POAPs based on the difference between all event IDs and found POAPs
          const foundEventIds = filteredPoaps.map(poap => poap.event.id);
          const missingEventIds = eventIds.filter(id => !foundEventIds.includes(id));
          setMissingPoaps(missingEventIds);

          if (filteredPoaps.length > 0) {
            const requiredPoapCount = 1; // Only one POAP is required for ETHGlobal Brussels 2024
            if (filteredPoaps.length >= requiredPoapCount) {
              setProofResult(`Proof successful! ${addressToFetch} has a valid POAP for ETHGlobal Brussels 2024.`);
              onVerified();
            } else {
              setProofResult(
                `${addressToFetch} has a POAP from ETHGlobal Brussels 2024, but it may not be the specific required one. Please check with the event organizers.`,
              );
            }
          } else {
            setProofResult("No POAPs from ETHGlobal Brussels 2024 were found for this address.");
          }

          break; // Success, exit the retry loop
        } catch (error) {
          console.error(`Error fetching POAP data (Attempt ${retries + 1}):`, error);

          if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const errorMessage = error.response?.data?.error || "Unknown error";
            console.error(`API Error: Status ${status}, Message: ${errorMessage}`);

            switch (status) {
              case 400:
                setProofResult(`Invalid input: ${errorMessage}. Please check your address and try again.`);
                setIsVerifying(false);
                return; // Don't retry on bad request
              case 401:
                setProofResult("Unauthorized. Please check your API key configuration.");
                setIsVerifying(false);
                return; // Don't retry on unauthorized
              case 404:
                setProofResult("No POAPs found for this address. Make sure you've attended ETHGlobal Brussels 2024.");
                setIsVerifying(false);
                return; // Don't retry on not found
              case 429:
                setProofResult("Too many requests. Please try again later.");
                setIsVerifying(false);
                return; // Don't retry on rate limit
              default:
                if (status && status >= 500) {
                  setProofResult(`Server error: ${errorMessage}. Retrying...`);
                } else {
                  setProofResult(`Network error: ${errorMessage}. Retrying...`);
                }
            }
          } else {
            console.error("Unexpected error:", error);
            setProofResult("An unexpected error occurred. Retrying...");
          }

          retries++;
          if (retries >= maxRetries) {
            setProofResult("Failed to fetch POAPs after multiple attempts. Please try again later.");
            setLocalPoaps([]);
            setMissingPoaps(eventIds);
            setIsVerifying(false);
            return; // Exit the retry loop after max retries
          }

          // Provide user feedback before retrying
          setProofResult(`Retrying... Attempt ${retries + 1} of ${maxRetries}`);

          // Implement exponential backoff with jitter
          const delay = Math.min(1000 * Math.pow(2, retries) + Math.random() * 1000, 10000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      setIsVerifying(false);
    },
    [onVerified, setPoaps],
  );

  useEffect(() => {
    const validAddress = manualAddress || userAddress;
    const isValid = Boolean(validAddress && isValidEthereumAddress(validAddress));
    if (isValid) {
      fetchPOAPs(validAddress);
    } else if (validAddress) {
      setProofResult("Please enter a valid Ethereum address");
    }
  }, [userAddress, manualAddress, fetchPOAPs]);

  const handleImageError = (tokenId: string) => {
    setImageLoadErrors(prev => ({ ...prev, [tokenId]: true }));
  };

  const isValidEthereumAddress = (address: string) => /^0x[a-fA-F0-9]{40}$/.test(address);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Event Attendance Proof</h2>
      <p className="mb-6 text-center text-gray-600">Verify your attendance at ETHGlobal Brussels 2024:</p>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Enter Ethereum address (optional)"
          value={manualAddress}
          onChange={e => setManualAddress(e.target.value)}
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
            manualAddress && !isValidEthereumAddress(manualAddress) ? "border-red-500" : "border-gray-300"
          }`}
          title="Enter your Ethereum address or ENS name to verify attendance"
        />
        {manualAddress && !isValidEthereumAddress(manualAddress) && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-sm">Please enter a valid Ethereum address</p>
        )}
      </div>
      <button
        onClick={() => {
          const addressToUse = manualAddress || userAddress;
          if (addressToUse && isValidEthereumAddress(addressToUse)) {
            fetchPOAPs(addressToUse);
          } else {
            setProofResult("Please enter a valid Ethereum address or connect your wallet");
          }
        }}
        disabled={isVerifying || (!manualAddress && !userAddress)}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 mb-6 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="Click to verify your attendance using POAPs"
      >
        {isVerifying ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Verifying...
          </span>
        ) : (
          "Verify Attendance"
        )}
      </button>
      {isVerifying && (
        <p className="text-blue-700 mb-6 text-center">
          Verifying attendance for {manualAddress || userAddress}...
        </p>
      )}
      {!isVerifying && !manualAddress && !userAddress && (
        <p className="text-yellow-600 mb-6 text-center">
          Please connect your wallet or enter an Ethereum address to verify
        </p>
      )}
      {localPoaps && localPoaps.length > 0 && (
        <div className="mt-6 bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4">POAPs Found</h3>
          <p className="text-green-800 mb-6">
            {localPoaps.length === eventIds.length
              ? "You have all required POAPs for ETHGlobal Brussels 2024."
              : `You have ${localPoaps.length} out of ${eventIds.length} required POAPs for ETHGlobal Brussels 2024.`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localPoaps.map(poap => (
              <div
                key={poap.token_id}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={
                    imageLoadErrors[poap.token_id]
                      ? "/placeholder-poap.png"
                      : poap.event?.image_url || "/placeholder-poap.png"
                  }
                  alt={poap.event?.name || "POAP"}
                  width={80}
                  height={80}
                  className="rounded-full mb-2"
                  onError={() => handleImageError(poap.token_id)}
                />
                <p className="text-sm font-medium text-center">{poap.event?.name || "Unknown Event"}</p>
                <p className="text-xs text-center text-gray-500">
                  {poap.event?.start_date ? new Date(poap.event.start_date).toLocaleDateString() : "Date unknown"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {missingPoaps && missingPoaps.length > 0 && (
        <div className="mt-6 bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-900 mb-4">Missing POAPs</h3>
          <p className="text-yellow-800">The following POAPs were not found for your address:</p>
          <ul className="list-disc list-inside mt-2">
            {missingPoaps.map(poap => (
              <li key={poap} className="text-yellow-700">
                {poap}
              </li>
            ))}
          </ul>
        </div>
      )}
      {proofResult && (
        <div className={`mt-6 p-6 rounded-lg ${proofResult.includes("successful") ? "bg-green-100" : "bg-red-100"}`}>
          <p className={`flex items-center ${proofResult.includes("successful") ? "text-green-800" : "text-red-700"}`}>
            {proofResult.includes("successful") ? (
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            {proofResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventAttendanceProof;
