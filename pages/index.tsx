import React, { useEffect, useState } from "react";
import EventAttendanceVerification from "../components/EventAttendanceVerification";
import IdentityVerification from "../components/IdentityVerification";
import OnchainAttestation from "../components/OnchainAttestation";

const stages = ["identity", "attendance", "attestation", "complete"] as const;
type Stage = (typeof stages)[number];

const stageDescriptions = {
  identity: "Verify your identity using ENS or Ethereum address",
  attendance: "Confirm your attendance at ETHGlobal events",
  attestation: "Create an onchain attestation of your mission enrolment",
  complete: "Mission enrolment completed successfully",
};

const Home: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<Stage>("identity");
  const [completedStages, setCompletedStages] = useState<Stage[]>([]);

  useEffect(() => {
    if (completedStages.length === 0 && currentStage !== "identity") {
      setCurrentStage("identity");
    }
  }, [completedStages, currentStage]);

  const handleStageCompletion = (stage: Stage) => {
    setCompletedStages(prev => [...prev, stage]);
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < stages.length - 1) {
      setCurrentStage(stages[currentIndex + 1]);
    }
  };

  const isStageAccessible = (stage: Stage) => {
    const stageIndex = stages.indexOf(stage);
    return stageIndex <= completedStages.length;
  };

  const renderCurrentStage = () => {
    switch (currentStage) {
      case "identity":
        return (
          <IdentityVerification
            onVerified={() => handleStageCompletion("identity")}
          />
        );
      case "attendance":
        return <EventAttendanceVerification onVerified={() => handleStageCompletion("attendance")} />;
      case "attestation":
        return <OnchainAttestation onAttestationComplete={() => handleStageCompletion("attestation")} />;
      case "complete":
        return (
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Mission Enrolment Complete!</h2>
            <p>Congratulations! You have successfully completed all stages of the mission enrolment.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mission Enrolment 2024</h1>
      <div className="mb-8 p-4 bg-blue-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Current Stage: {currentStage.charAt(0).toUpperCase() + currentStage.slice(1)}</h2>
        <p className="text-lg">{stageDescriptions[currentStage]}</p>
        <p className="mt-2 text-sm text-blue-700">Complete this stage to proceed to the next step of your mission enrolment.</p>
      </div>
      {renderCurrentStage()}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Mission Progress:</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(completedStages.length / stages.length) * 100}%` }}
          ></div>
        </div>
        <ul className="space-y-4">
          {stages.map((stage, index) => (
            <li
              key={stage}
              className={`flex items-center p-4 rounded-lg shadow-sm transition-all duration-300 ${
                isStageAccessible(stage)
                  ? "bg-white border-l-4 border-green-500 cursor-pointer hover:bg-green-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => {
                if (isStageAccessible(stage)) {
                  setCurrentStage(stage);
                }
              }}
            >
              <span className="mr-4 text-2xl">
                {completedStages.includes(stage) ? "✅" : currentStage === stage ? "🔵" : `${index + 1}`}
              </span>
              <div>
                <span className="font-semibold text-lg">{stage.charAt(0).toUpperCase() + stage.slice(1)}</span>
                <p className="text-sm mt-1">{stageDescriptions[stage]}</p>
                {currentStage === stage && (
                  <p className="text-xs mt-2 text-blue-600">You are here - complete this stage to proceed.</p>
                )}
                {!isStageAccessible(stage) && (
                  <p className="text-xs mt-2 text-gray-500">Complete previous stages to unlock.</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
