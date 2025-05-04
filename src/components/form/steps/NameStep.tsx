
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
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

  return (
    <div className="animate-slide-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">Dein Name</h2>
      <p className="text-gray-600 mb-8 text-lg">Trage hier Vor- sowie Nachname ein</p>

      <div className="space-y-6">
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
            placeholder="Vorname"
            className={`h-12 text-base rounded-lg ${errors.firstName ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-form-primary"}`}
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
            placeholder="Nachname"
            className={`h-12 text-base rounded-lg ${errors.lastName ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-form-primary"}`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1.5">{errors.lastName}</p>
          )}
        </div>

        <Button 
          className="w-full h-12 mt-8 bg-form-primary hover:bg-form-primary/90 text-white text-base rounded-lg transition-all"
          onClick={handleNextStep}
        >
          <span>Weiter</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NameStep;
