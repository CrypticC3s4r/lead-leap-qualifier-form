
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const options = [
  { value: "500", label: "500 €" },
  { value: "3000", label: "3.000 €" },
  { value: "5000", label: "5.000 €" },
  { value: "7000", label: "7.000 €" },
  { value: "15000", label: "15.000 €" },
  { value: "25000", label: "25.000 €" },
];

const InvestmentStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.investmentAmount) {
      setError("Bitte wähle eine Option");
      return;
    }

    setError("");
    setCurrentStep(12);
  };

  const handlePrevStep = () => {
    setCurrentStep(10);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Wie viel könntest du SOFORT investieren, um dein Ziel SICHER zu erreichen?</h2>

      <div className="space-y-4">
        <RadioGroup 
          value={formValues.investmentAmount} 
          onValueChange={(value) => {
            updateFormValues({ investmentAmount: value });
            setError("");
          }}
          className="space-y-3"
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50 cursor-pointer">
              <RadioGroupItem value={option.value} id={`investment-${option.value}`} />
              <Label htmlFor={`investment-${option.value}`} className="flex-1 cursor-pointer">{option.label}</Label>
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

export default InvestmentStep;
