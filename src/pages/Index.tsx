
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadQualifierForm from "@/components/form/LeadQualifierForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container py-8">
        <LeadQualifierForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
