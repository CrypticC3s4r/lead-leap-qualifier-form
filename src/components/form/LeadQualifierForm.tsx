
import { FormProvider } from "@/contexts/FormContext";
import FormStepper from "@/components/form/FormStepper";
import { Card, CardContent } from "@/components/ui/card";

const LeadQualifierForm = () => {
  return (
    <FormProvider>
      <div className="w-full max-w-2xl mx-auto">
        <Card className="border-t-4 border-t-form">
          <CardContent className="p-6">
            <FormStepper />
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
};

export default LeadQualifierForm;
