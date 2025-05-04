
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const ChallengeStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.biggestChallenge.trim()) {
      setError("Bitte beschreibe deine größte Herausforderung");
      return;
    }

    setError("");
    setCurrentStep(11);
  };

  const handlePrevStep = () => {
    setCurrentStep(9);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Was ist momentan deine größte Herausforderung?</h2>
      <p className="text-gray-500 mb-6">
        Beschreibe mir gerne deine Engpässe
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="challenge">Deine größte Herausforderung</Label>
          <Textarea
            id="challenge"
            value={formValues.biggestChallenge}
            onChange={(e) => {
              updateFormValues({ biggestChallenge: e.target.value });
              setError("");
            }}
            placeholder="Beschreibe hier deine Herausforderungen..."
            className={`min-h-[150px] ${error ? "border-red-500" : ""}`}
          />
          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>

        <div className="flex space-x-4 mt-6">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handlePrevStep}
          >
            Zurück
          </Button>
          <Button 
            className="flex-1 bg-form hover:bg-form/90"
            onClick={handleNextStep}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeStep;
