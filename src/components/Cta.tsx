import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of professionals already using Maverick AI to automate tasks, 
            enhance productivity, and deliver exceptional experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg h-12" size="lg" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-12" size="lg" asChild>
              <Link to="/demo">Request Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            No credit card required. 14-day free trial on all plans.
          </p>
        </div>
      </div>
    </section>
  );
}
