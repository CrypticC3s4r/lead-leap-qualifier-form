
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const TermsStep = () => {
  const { formValues, updateFormValues, setCurrentStep, submitForm, isSubmitting } = useFormContext();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formValues.termsAccepted) {
      setError("Bitte akzeptiere die Datenschutzerklärung");
      return;
    }

    try {
      await submitForm();
      toast.success("Vielen Dank für deine Bewerbung", {
        description: "Wir werden uns bald bei dir melden.",
      });
    } catch (error) {
      toast.error("Es ist ein Fehler aufgetreten", {
        description: "Bitte versuche es später erneut.",
      });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(13);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Fast geschafft!</h2>

      <div className="space-y-6">
        <div className="border p-4 rounded-md bg-gray-50">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms" 
              checked={formValues.termsAccepted}
              onCheckedChange={(checked) => {
                updateFormValues({ termsAccepted: checked === true });
                setError("");
              }}
            />
            <div className="space-y-1">
              <Label 
                htmlFor="terms" 
                className="text-sm leading-relaxed"
              >
                Wenn du die im Bewerbungsformular eingegebenen Daten durch Klick auf den nachfolgenden Button übersendest, erklärst du dich damit einverstanden, dass wir deine Angaben speichern und für die Beantwortung deiner Anfrage verwenden dürfen.
              </Label>
              <a 
                href="#" 
                className="text-sm text-form hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/datenschutz", "_blank");
                }}
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-3">{error}</p>
          )}
        </div>

        <div className="flex space-x-4 mt-6">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handlePrevStep}
            disabled={isSubmitting}
          >
            Zurück
          </Button>
          <Button 
            className="flex-1 bg-form hover:bg-form/90"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Absenden"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsStep;
