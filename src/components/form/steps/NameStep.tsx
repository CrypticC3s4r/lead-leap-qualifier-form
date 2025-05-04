
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, KeyboardEvent } from "react";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const NameStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: ""
  });

  const handleNextStep = () => {
    let formValid = true;
    const newErrors = {
      firstName: "",
      lastName: ""
    };

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "Vorname ist erforderlich";
      formValid = false;
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Nachname ist erforderlich";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      setCurrentStep(2);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNextStep();
    }
  };

  return (
    <div className="animate-slide-in">
      <div className="form-step-number">1 <span className="form-arrow">→</span></div>
      <h2 className="font-normal mb-2">Dein Name</h2>
      <p className="text-gray-600 mb-8">Trage hier Vor- sowie Nachname ein</p>

      <div className="space-y-10">
        <div>
          <Label htmlFor="firstName" className="text-base mb-1.5 block">Vorname</Label>
          <Input
            id="firstName"
            type="text"
            value={formValues.firstName}
            onChange={(e) => {
              updateFormValues({ firstName: e.target.value });
              if (errors.firstName) setErrors({...errors, firstName: ""});
            }}
            onKeyDown={handleKeyDown}
            placeholder="Vorname"
            className="form-underlined-input h-12 text-base"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1.5">{errors.firstName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName" className="text-base mb-1.5 block">Nachname</Label>
          <Input
            id="lastName"
            type="text"
            value={formValues.lastName}
            onChange={(e) => {
              updateFormValues({ lastName: e.target.value });
              if (errors.lastName) setErrors({...errors, lastName: ""});
            }}
            onKeyDown={handleKeyDown}
            placeholder="Nachname"
            className="form-underlined-input h-12 text-base"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1.5">{errors.lastName}</p>
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

export default NameStep;
