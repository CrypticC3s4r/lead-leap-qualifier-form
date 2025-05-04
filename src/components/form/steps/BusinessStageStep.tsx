
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const options = [
  { 
    value: "start", 
    label: "Ich stehe noch ganz am Anfang meiner Selbstständigkeit" 
  },
  { 
    value: "firstSteps", 
    label: "Ich habe schon die ersten Schritte gemacht." 
  },
  { 
    value: "notOnline", 
    label: "Ich bin selbstständig, aber noch nicht gut online aufgestellt." 
  },
  { 
    value: "goingWell", 
    label: "Es läuft schon ganz gut, aber ich will noch mehr." 
  },
  { 
    value: "established", 
    label: "Ich bin schon gut etabliert, habe allerdings Schwierigkeiten Privatleben & Business in's Gleichgewicht zu bringen." 
  },
];

const BusinessStageStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.businessStage) {
      setError("Bitte wähle eine Option");
      return;
    }

    setError("");
    setCurrentStep(8);
  };

  const handlePrevStep = () => {
    setCurrentStep(6);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Wo stehst du gerade?</h2>

      <div className="space-y-4">
        <RadioGroup 
          value={formValues.businessStage} 
          onValueChange={(value) => {
            updateFormValues({ businessStage: value });
            setError("");
          }}
          className="space-y-3"
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50 cursor-pointer">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">{option.label}</Label>
            </div>
          ))}
        </RadioGroup>

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}

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

export default BusinessStageStep;
