import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesComponent from "@/components/Features"; // Renamed import to avoid conflict

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto py-10 text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading">Our Features</h1>
          <p className="text-lg text-gray-600 mb-10">Explore the powerful capabilities of Maverick AI.</p>
        </div>
        <FeaturesComponent /> {/* Use the Features component */}
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
