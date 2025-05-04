
import { useFormContext } from "@/contexts/FormContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ReadinessScaleStep = () => {
  const { formValues, updateFormValues, setCurrentStep } = useFormContext();
  const [sliderValue, setSliderValue] = useState<number[]>([formValues.readinessScale || 5]);

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
      <div 
        key={i} 
        className={`flex flex-col items-center transition-all ${
          sliderValue[0] >= i + 1 ? "text-form-primary font-medium" : "text-gray-400"
        }`}
      >
        <span className="text-sm">{i + 1}</span>
      </div>
    ));
  };

  return (
    <div className="animate-slide-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
        Auf einer Skala von 1 bis 10 wie bereit fühlst du dich für eine Veränderung in deinem Leben?
      </h2>

      <div className="space-y-12">
        <div className="pt-10">
          <div className="relative">
            <Slider
              value={sliderValue}
              min={1}
              max={10}
              step={1}
              onValueChange={handleSliderChange}
              className="mb-8"
              color="#A259FF"
            />
            <div className="flex justify-between mt-4">
              {renderScaleMarkers()}
            </div>
          </div>

          <div className="flex justify-between mt-10 items-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">Weniger bereit</div>
            </div>
            <div className="text-center py-4 px-8 rounded-full bg-form-primary/10 border border-form-primary/20">
              <div className="text-3xl font-bold text-form-primary">{sliderValue[0]}</div>
              <div className="text-sm text-gray-600">Deine Auswahl</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Sehr bereit</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-10">
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

export default ReadinessScaleStep;
