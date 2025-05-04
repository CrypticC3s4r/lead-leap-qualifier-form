
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const PhoneStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.phoneNumber.trim()) {
      setError("Handynummer ist erforderlich");
      return;
    }

    // Simple phone validation - at least 6 digits
    const phoneRegex = /^\+?[0-9\s]{6,}$/;
    if (!phoneRegex.test(formValues.phoneNumber.replace(/\s/g, ''))) {
      setError("Bitte gib eine gültige Handynummer ein");
      return;
    }

    setError("");
    setCurrentStep(4);
  };

  const handlePrevStep = () => {
    setCurrentStep(2);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Deine Handynummer</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="phone">Handynummer</Label>
          <Input
            id="phone"
            type="tel"
            value={formValues.phoneNumber}
            onChange={(e) => {
              updateFormValues({ phoneNumber: e.target.value });
              setError("");
            }}
            placeholder="Handynummer"
            className={error ? "border-red-500" : ""}
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

export default PhoneStep;
