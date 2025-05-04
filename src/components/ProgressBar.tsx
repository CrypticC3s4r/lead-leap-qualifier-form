
import { useFormContext } from "@/contexts/FormContext";
import { Progress } from "@/components/ui/progress";

const TOTAL_STEPS = 14;

const ProgressBar = () => {
  const { currentStep } = useFormContext();
  
  const progressPercentage = Math.round((currentStep / TOTAL_STEPS) * 100);
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span className="font-medium">{`Schritt ${currentStep} von ${TOTAL_STEPS}`}</span>
        <span>{`${progressPercentage}%`}</span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-1 w-full bg-gray-100"
        indicatorClassName="bg-gradient-form"
      />
    </div>
  );
};

export default ProgressBar;
