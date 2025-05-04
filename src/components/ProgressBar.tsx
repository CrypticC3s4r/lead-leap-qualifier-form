
import { useFormContext } from "@/contexts/FormContext";

const TOTAL_STEPS = 14;

const ProgressBar = () => {
  const { currentStep } = useFormContext();
  
  const progressPercentage = Math.round((currentStep / TOTAL_STEPS) * 100);
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{`Schritt ${currentStep} von ${TOTAL_STEPS}`}</span>
        <span>{`${progressPercentage}%`}</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div 
          className="h-full bg-gradient-form rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
