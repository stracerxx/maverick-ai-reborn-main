import { CircleCheck, MessageSquare, Settings, Link, Search } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Intelligent Conversations",
      description: "Built on advanced language models that understand context and maintain coherent, helpful conversations."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Custom Behaviors",
      description: "Define your agent's knowledge, personality, and expertise with our intuitive training interface."
    },
    {
      icon: <Link className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Embed your agents on your website, messaging platforms, or use API access for custom applications."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Web-Enabled Research",
      description: "Agents can search the web, analyze data, and provide up-to-date information for your queries."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Build AI Agents That Work For You
          </h2>
          <p className="text-lg text-gray-600">
            Maverick AI gives you the power to create custom AI agents that handle 
            specific tasks exactly the way you want them done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-heading">Create an Agent in Minutes</h2>
                <p className="text-lg text-gray-600 mb-6">
                  No technical expertise needed. Simply describe what you want your agent to do,
                  provide some examples, and Maverick AI handles the rest.
                </p>
                <ul className="space-y-4">
                  {[
                    "Easy setup with guided templates",
                    "Train with conversation examples",
                    "Test and refine your agent's responses",
                    "Deploy with one click to any platform"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CircleCheck className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src="https://placehold.co/600x400/f5f5f5/6E59A5?text=Agent+Creation+Interface" 
                  alt="Agent Creation Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
