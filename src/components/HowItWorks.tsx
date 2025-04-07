import { Code, User, CircleCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <User className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />,
      title: "Describe Your Agent",
      description: "Provide your agent's purpose, knowledge base, and personality traits. No technical expertise required."
    },
    {
      icon: <Code className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />,
      title: "Train & Refine",
      description: "Our platform uses advanced neural networks to train your agent based on your specifications and examples."
    },
    {
      icon: <CircleCheck className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />,
      title: "Deploy Anywhere",
      description: "Integrate your agent on websites, messaging platforms, or apps with simple embed codes or API calls."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            How Maverick AI Works
          </h2>
          <p className="text-lg text-gray-600">
            Creating your own AI agent is simple, intuitive, and remarkably powerful.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-24 left-1/2 h-[calc(100%-6rem)] w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="order-2 md:order-1">
                        <div className="p-1 bg-white rounded-xl shadow-lg">
                          <img 
                            src={`https://placehold.co/600x400/f5f5f5/6E59A5?text=Step+${index+1}`} 
                            alt={`Step ${index+1}`} 
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="flex items-center space-x-4 mb-4">
                          {step.icon}
                          <h3 className="text-xl md:text-2xl font-bold font-heading">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          {step.icon}
                          <h3 className="text-xl md:text-2xl font-bold font-heading">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div>
                        <div className="p-1 bg-white rounded-xl shadow-lg">
                          <img 
                            src={`https://placehold.co/600x400/f5f5f5/6E59A5?text=Step+${index+1}`} 
                            alt={`Step ${index+1}`} 
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
