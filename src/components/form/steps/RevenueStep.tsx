
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const options = [
  { value: "noRevenue", label: "Noch keine Umsätze vorhanden" },
  { value: "under4000", label: "bis 4000 €" },
  { value: "5000-10000", label: "5.000 - 10.000 €" },
  { value: "10000-20000", label: "10.000 - 20.000 €" },
  { value: "20000-50000", label: "20.000 - 50.000 €" },
];

const RevenueStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.monthlyRevenue) {
      setError("Bitte wähle eine Option");
      return;
    }

    setError("");
    setCurrentStep(10);
  };

  const handlePrevStep = () => {
    setCurrentStep(8);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Wie hoch ist momentan durchschnittlich dein monatlicher Umsatz?</h2>

      <div className="space-y-4">
        <RadioGroup 
          value={formValues.monthlyRevenue} 
          onValueChange={(value) => {
            updateFormValues({ monthlyRevenue: value });
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

export default RevenueStep;
