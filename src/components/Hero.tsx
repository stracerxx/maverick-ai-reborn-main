import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-gradient">
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Your Personal AI Agents for 
            <span className="gradient-text"> Any Task</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build, train, and deploy customized AI agents that work for you 24/7. 
            No coding required. Just describe what you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary text-lg h-12" size="lg" asChild>
              <Link to="/signup">Create Your Agent</Link>
            </Button>
            <Button variant="outline" className="text-lg h-12" size="lg" asChild>
              <Link to="/templates">Explore Templates</Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            No credit card required to start. Free tier available.
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute -top-10 -left-10 right-0 bottom-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl -z-10"></div>
            <img 
              src="https://placehold.co/1200x600/f5f5f5/6E59A5?text=Maverick+AI+Dashboard" 
              alt="Maverick AI Dashboard" 
              className="w-full h-auto rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
