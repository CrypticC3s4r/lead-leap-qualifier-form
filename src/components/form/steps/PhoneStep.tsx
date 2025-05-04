
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, KeyboardEvent } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries, getDefaultCountry } from "@/utils/countryData";

const PhoneStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [error, setError] = useState("");

  useEffect(() => {
    // Set default country code if not already set
    if (!formValues.countryCode) {
      updateFormValues({ countryCode: getDefaultCountry().dialCode });
    }
  }, [formValues.countryCode, updateFormValues]);

  const handleNextStep = () => {
    if (!formValues.phoneNumber.trim()) {
      setError("Handynummer ist erforderlich");
      return;
    }

    // Simple phone validation - at least 6 digits (without the country code)
    const phoneRegex = /^[0-9\s]{6,}$/;
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">Deine Handynummer</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="country-code">Land</Label>
          <Select
            value={formValues.countryCode}
            onValueChange={(value) => updateFormValues({ countryCode: value })}
            name="country-code"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Land auswählen" />
            </SelectTrigger>
            <SelectContent position="popper" className="max-h-[300px]">
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.dialCode}>
                  <div className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="text-gray-500 ml-auto">{country.dialCode}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="phone">Handynummer</Label>
          <div className="flex">
            <div className="bg-gray-100 border border-input rounded-l-md px-3 py-2 flex items-center text-gray-700 min-w-[70px]">
              {formValues.countryCode || '+49'}
            </div>
            <Input
              id="phone"
              type="tel"
              value={formValues.phoneNumber}
              onChange={(e) => {
                updateFormValues({ phoneNumber: e.target.value });
                setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="Handynummer (ohne Vorwahl)"
              className={`rounded-l-none ${error ? "border-red-500" : ""}`}
            />
          </div>
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
            className="flex-1 form-button"
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
