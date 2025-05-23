
import { useFormContext } from "@/contexts/FormContext";
import { Progress } from "@/components/ui/progress";

const TOTAL_STEPS = 14;

const ProgressBar = () => {
  const { currentStep } = useFormContext();
  
  const progressPercentage = Math.round((currentStep / TOTAL_STEPS) * 100);
  
  return (
    <div className="w-full mb-8">
      <Progress 
        value={progressPercentage} 
        className="h-0.5 w-full bg-gray-100"
        indicatorClassName="bg-black"
      />
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>{progressPercentage}%</span>
        <span>{currentStep}/{TOTAL_STEPS}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
