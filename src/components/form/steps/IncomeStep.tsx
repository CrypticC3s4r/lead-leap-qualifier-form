
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const options = [
  { value: "under1300", label: "Unter 1300€" },
  { value: "1300-2000", label: "1300-2000€" },
  { value: "2000-3000", label: "2000-3000€" },
  { value: "3000-5000", label: "3000-5000€" },
  { value: "5000-7000", label: "5000-7000€" },
  { value: "over7000", label: "7000€ und mehr" },
];

const IncomeStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.income) {
      setError("Bitte wähle eine Option");
      return;
    }

    setError("");
    setCurrentStep(7);
  };

  const handlePrevStep = () => {
    setCurrentStep(5);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Wie hoch ist dein aktuelles Netto-Einkommen?</h2>

      <div className="space-y-4">
        <RadioGroup 
          value={formValues.income} 
          onValueChange={(value) => {
            updateFormValues({ income: value });
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

export default IncomeStep;
