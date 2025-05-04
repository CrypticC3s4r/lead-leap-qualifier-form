
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const EmailStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.email.trim()) {
      setError("E-Mail ist erforderlich");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein");
      return;
    }

    setError("");
    setCurrentStep(3);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="animate-slide-in">
      <div className="form-step-number">2 <span className="form-arrow">→</span></div>
      <h2 className="font-normal mb-2">Deine E-Mail</h2>

      <div className="space-y-10 mt-8">
        <div>
          <Label htmlFor="email" className="text-base mb-1.5 block">E-Mail</Label>
          <Input
            id="email"
            type="email"
            value={formValues.email}
            onChange={(e) => {
              updateFormValues({ email: e.target.value });
              setError("");
            }}
            placeholder="deine@email.de"
            className="form-underlined-input h-12 text-base"
          />
          {error && (
            <p className="text-red-500 text-sm mt-1.5">{error}</p>
          )}
        </div>

        <div>
          <Button 
            className="form-button px-8 py-3 h-auto rounded-sm"
            onClick={handleNextStep}
          >
            <span className="mr-2">Ok</span>
          </Button>
          <div className="text-sm text-gray-500 mt-2">Drücken Sie Enter ↵</div>
        </div>
      </div>
    </div>
  );
};

export default EmailStep;
