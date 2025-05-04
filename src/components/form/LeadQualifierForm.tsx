
import { FormProvider } from "@/contexts/FormContext";
import FormStepper from "@/components/form/FormStepper";
import { Card, CardContent } from "@/components/ui/card";

const LeadQualifierForm = () => {
  return (
    <FormProvider>
      <div className="w-full max-w-3xl mx-auto">
        <Card className="form-card border-none shadow-none">
          <CardContent className="p-8">
            <FormStepper />
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
};

export default LeadQualifierForm;
