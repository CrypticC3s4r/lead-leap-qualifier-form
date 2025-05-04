
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">Deine E-Mail</h2>

      <div className="space-y-6">
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
            className={`h-12 text-base rounded-lg ${error ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-form-primary"}`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1.5">{error}</p>
          )}
        </div>

        <div className="flex space-x-4 mt-8">
          <Button 
            variant="outline" 
            className="flex-1 h-12 text-base rounded-lg border-gray-300"
            onClick={handlePrevStep}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Zurück</span>
          </Button>
          <Button 
            className="flex-1 h-12 bg-form-primary hover:bg-form-primary/90 text-white text-base rounded-lg"
            onClick={handleNextStep}
          >
            <span>Weiter</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailStep;
