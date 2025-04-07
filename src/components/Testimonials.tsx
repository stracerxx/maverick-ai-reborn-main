import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Maverick AI has transformed our customer support. Our agents handle 70% of inquiries automatically, and our team can focus on complex cases.",
      author: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechFlow Inc."
    },
    {
      quote: "The ability to train my AI with specific expertise has been game-changing. My content research assistant saves me hours every day.",
      author: "Marcus Chen",
      role: "Content Strategist",
      company: "MediaPulse"
    },
    {
      quote: "We embedded a Maverick agent on our website and saw a 35% increase in qualified leads. The ROI has been incredible.",
      author: "Priya Sharma",
      role: "Marketing Director",
      company: "Nexus Solutions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of professionals who are revolutionizing their workflows with Maverick AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto bg-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Ready to experience the difference?</h3>
              <p className="text-lg mb-6">
                Join thousands of professionals who are transforming their workflows with custom AI agents.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">1,000+ users</div>
                  <div className="text-gray-600">have joined this month</div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href="/signup" className="btn-primary inline-block">Get Started For Free</a>
              <p className="text-sm mt-2 text-gray-600">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
