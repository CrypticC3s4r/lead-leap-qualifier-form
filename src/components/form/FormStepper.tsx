
import { useFormContext } from "@/contexts/FormContext";
import ProgressBar from "@/components/ProgressBar";
import NameStep from "@/components/form/steps/NameStep";
import EmailStep from "@/components/form/steps/EmailStep";
import PhoneStep from "@/components/form/steps/PhoneStep";
import EmploymentStatusStep from "@/components/form/steps/EmploymentStatusStep";
import EmploymentTypeStep from "@/components/form/steps/EmploymentTypeStep";
import IncomeStep from "@/components/form/steps/IncomeStep";
import BusinessStageStep from "@/components/form/steps/BusinessStageStep";
import OfferStep from "@/components/form/steps/OfferStep";
import RevenueStep from "@/components/form/steps/RevenueStep";
import ChallengeStep from "@/components/form/steps/ChallengeStep";
import InvestmentStep from "@/components/form/steps/InvestmentStep";
import WhyYouStep from "@/components/form/steps/WhyYouStep";
import ReadinessScaleStep from "@/components/form/steps/ReadinessScaleStep";
import TermsStep from "@/components/form/steps/TermsStep";

const FormStepper = () => {
  const { currentStep } = useFormContext();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <NameStep />;
      case 2:
        return <EmailStep />;
      case 3:
        return <PhoneStep />;
      case 4:
        return <EmploymentStatusStep />;
      case 5:
        return <EmploymentTypeStep />;
      case 6:
        return <IncomeStep />;
      case 7:
        return <BusinessStageStep />;
      case 8:
        return <OfferStep />;
      case 9:
        return <RevenueStep />;
      case 10:
        return <ChallengeStep />;
      case 11:
        return <InvestmentStep />;
      case 12:
        return <WhyYouStep />;
      case 13:
        return <ReadinessScaleStep />;
      case 14:
        return <TermsStep />;
      default:
        return <NameStep />;
    }
  };

  return (
    <div>
      <ProgressBar />
      {renderCurrentStep()}
    </div>
  );
};

export default FormStepper;
