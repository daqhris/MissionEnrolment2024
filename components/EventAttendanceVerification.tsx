import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useEnsAddress } from "wagmi";

interface POAPEvent {
  event: {
    id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    city: string;
  };
  tokenId: string;
  owner: string;
  chain: string;
  created: string;
  imageUrl: string;
}

// API_BASE_URL is no longer used, so we can remove this line entirely

const EventAttendanceProof: React.FC<{ onVerified: () => void }> = ({ onVerified }) => {
  const [inputAddress, setInputAddress] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [proofResult, setProofResult] = useState<string | null>(null);
  const [poaps, setPOAPs] = useState<POAPEvent[]>([]);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});

  const { data: ensAddress } = useEnsAddress({
    name: inputAddress,
  });

  const fetchPOAPs = useCallback(async (address: string) => {
    setIsVerifying(true);
    setProofResult(null);
    try {
      const response = await fetch(`/api/mockPoapApi?address=${address}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch POAPs: ${response.statusText}`);
      }
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No POAPs found for this address");
      }
      const ethGlobalPOAPs = data.filter(
        (poap: POAPEvent) =>
          poap.event.name.toLowerCase().includes("ethglobal") && poap.event.city.toLowerCase() === "brussels",
      );
      setPOAPs(ethGlobalPOAPs);
      if (ethGlobalPOAPs.length === 0) {
        setProofResult("No eligible POAPs found for ETHGlobal events in Brussels.");
      }
    } catch (error) {
      console.error("Error fetching POAPs:", error);
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setProofResult("Network error. Please check your internet connection and try again.");
      } else {
        setProofResult(error instanceof Error ? error.message : "Failed to fetch POAPs. Please try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  }, []);

  useEffect(() => {
    if (ensAddress || inputAddress) {
      fetchPOAPs(ensAddress || inputAddress);
    }
  }, [ensAddress, inputAddress, fetchPOAPs]);

  const handleVerify = useCallback(() => {
    if (poaps.length > 0) {
      setProofResult(`Proof successful! ${inputAddress} has attended an ETHGlobal event in Brussels.`);
      onVerified();
    } else {
      setProofResult(
        `Proof failed. No eligible POAPs found for ${inputAddress} at ETHGlobal events in Brussels.`,
      );
    }
  }, [poaps, inputAddress, onVerified, setProofResult]);

  const handleImageError = (tokenId: string) => {
    setImageLoadErrors(prev => ({ ...prev, [tokenId]: true }));
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Event Attendance Proof</h2>
      <p className="mb-4">
        Enter your Ethereum address or ENS name to provide proof of your attendance at an ETHGlobal event in Brussels:
      </p>
      <input
        type="text"
        value={inputAddress}
        onChange={e => setInputAddress(e.target.value)}
        placeholder="Enter Ethereum address or ENS name"
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => fetchPOAPs(ensAddress || inputAddress)}
          disabled={!inputAddress || isVerifying}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 flex-1"
        >
          Fetch POAPs
        </button>
        <button
          onClick={handleVerify}
          disabled={isVerifying || poaps.length === 0}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-300 flex-1"
        >
          Confirm Attendance
        </button>
      </div>
      {isVerifying ? (
        <p>Fetching POAPs for {ensAddress || inputAddress}...</p>
      ) : (
        <>
          {poaps.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Eligible POAPs:</h3>
              <ul className="list-none pl-0">
                {poaps.map(poap => (
                  <li key={poap.tokenId} className="flex items-center mb-2">
                    <div className="w-12 h-12 mr-2 rounded overflow-hidden">
                      <Image
                        src={imageLoadErrors[poap.tokenId] ? "/placeholder-poap.png" : poap.imageUrl}
                        alt={poap.event.name}
                        width={48}
                        height={48}
                        className="object-cover"
                        onError={() => handleImageError(poap.tokenId)}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{poap.event.name}</p>
                      <p className="text-sm text-gray-600">{new Date(poap.event.start_date).toLocaleDateString()}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      {proofResult && (
        <p className={`mt-4 ${proofResult.includes("successful") ? "text-green-500" : "text-red-500"}`}>
          {proofResult}
        </p>
      )}
    </div>
  );
};

export default EventAttendanceProof;
