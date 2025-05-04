
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const OfferStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.offer.trim()) {
      setError("Bitte beschreibe dein Angebot");
      return;
    }

    setError("");
    setCurrentStep(9);
  };

  const handlePrevStep = () => {
    setCurrentStep(7);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Was ist dein Angebot?</h2>
      <p className="text-gray-500 mb-6">
        Schreibe hier bitte kurz auf, was dein Angebot ist. Falls du noch kein Angebot hast: Was hast du vor?
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="offer">Dein Angebot</Label>
          <Textarea
            id="offer"
            value={formValues.offer}
            onChange={(e) => {
              updateFormValues({ offer: e.target.value });
              setError("");
            }}
            placeholder="Beschreibe hier dein Angebot..."
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

export default OfferStep;
