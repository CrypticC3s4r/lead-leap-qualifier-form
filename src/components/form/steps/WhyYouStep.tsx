
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const WhyYouStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!formValues.whyYou.trim()) {
      setError("Bitte fülle dieses Feld aus");
      return;
    }

    setError("");
    setCurrentStep(13);
  };

  const handlePrevStep = () => {
    setCurrentStep(11);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Zum Schluss: ​Was unterscheidet dich von den anderen Bewerberinnen und warum sollte ich dich kostenlos beraten?</h2>
      <p className="text-gray-500 mb-6">
        Bewirb dich auf eine Zusammenarbeit wie die Person, die du wirklich sein willst!
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="whyYou">Warum du?</Label>
          <Textarea
            id="whyYou"
            value={formValues.whyYou}
            onChange={(e) => {
              updateFormValues({ whyYou: e.target.value });
              setError("");
            }}
            placeholder="Beschreibe hier, warum du die richtige Person bist..."
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

export default WhyYouStep;
