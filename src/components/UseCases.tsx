import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function UseCases() {
  const useCases = [
    {
      title: "Customer Support",
      description: "Create agents that handle common customer questions 24/7, freeing your team to focus on complex issues.",
      icon: "🧑‍💼",
      color: "bg-blue-50"
    },
    {
      title: "Sales Assistant",
      description: "Build agents that qualify leads, answer product questions, and guide prospects through your sales funnel.",
      icon: "📈",
      color: "bg-green-50"
    },
    {
      title: "Content Creation",
      description: "Deploy agents that help generate ideas, draft content, and maintain a consistent brand voice.",
      icon: "✍️",
      color: "bg-purple-50"
    },
    {
      title: "Personal Assistant",
      description: "Design agents to manage your schedule, summarize information, and handle routine tasks.",
      icon: "📅",
      color: "bg-yellow-50"
    },
    {
      title: "Knowledge Base",
      description: "Transform your documentation into interactive agents that help users find exactly what they need.",
      icon: "📚",
      color: "bg-red-50"
    },
    {
      title: "Workflow Automation",
      description: "Create agents that coordinate tasks, send notifications, and keep projects on track.",
      icon: "⚙️",
      color: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Endless Possibilities
          </h2>
          <p className="text-lg text-gray-600">
            From automating routine tasks to providing specialized expertise, 
            Maverick AI agents adapt to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <div key={index} className={`rounded-xl p-6 ${useCase.color} border border-gray-100`}>
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-heading">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary" size="lg" asChild>
            <Link to="/templates">Browse Template Library</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
