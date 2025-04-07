import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingComponent from "@/components/Pricing"; // Renamed import

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Add padding for fixed navbar */}
         <div className="container mx-auto py-10 text-center">
           <h1 className="text-4xl font-bold mb-4 font-heading">Pricing Plans</h1>
           <p className="text-lg text-gray-600 mb-10">Choose the plan that best suits your needs.</p>
         </div>
        <PricingComponent /> {/* Use the Pricing component */}
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
