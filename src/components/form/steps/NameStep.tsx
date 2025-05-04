
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

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

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Dein Name</h2>
      <p className="text-gray-500 mb-6">Trage hier Vor- sowie Nachname ein</p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName">Vorname</Label>
          <Input
            id="firstName"
            type="text"
            value={formValues.firstName}
            onChange={(e) => updateFormValues({ firstName: e.target.value })}
            placeholder="Vorname"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Nachname</Label>
          <Input
            id="lastName"
            type="text"
            value={formValues.lastName}
            onChange={(e) => updateFormValues({ lastName: e.target.value })}
            placeholder="Nachname"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <Button 
          className="w-full mt-6 bg-form hover:bg-form/90"
          onClick={handleNextStep}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default NameStep;
