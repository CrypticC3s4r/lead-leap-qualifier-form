
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const ReadinessScaleStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [sliderValue, setSliderValue] = useState<number[]>([formValues.readinessScale]);

  const handleNextStep = () => {
    setCurrentStep(14);
  };

  const handlePrevStep = () => {
    setCurrentStep(12);
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    updateFormValues({ readinessScale: value[0] });
  };

  const renderScaleMarkers = () => {
    return Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="flex flex-col items-center">
        <span className="text-sm font-medium">{i + 1}</span>
      </div>
    ));
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">
        Auf einer Skala von 1 bis 10 wie bereit fühlst du dich für eine Veränderung in deinem Leben?
      </h2>

      <div className="space-y-10">
        <div className="mb-10">
          <div className="relative pt-8">
            <Slider
              value={sliderValue}
              min={1}
              max={10}
              step={1}
              onValueChange={handleSliderChange}
              className="mb-6"
            />
            <div className="flex justify-between mt-2">
              {renderScaleMarkers()}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="text-center">
              <div className="text-sm text-gray-500">Weniger bereit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{sliderValue[0]}</div>
              <div className="text-sm text-gray-500">Deine Auswahl</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Sehr bereit</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-10">
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

export default ReadinessScaleStep;
