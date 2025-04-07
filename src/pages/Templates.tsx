import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Briefcase, Feather, Bot } from "lucide-react";

const TemplatesPage = () => {
  const templates = [
    { title: "Customer Support Agent", description: "Handle FAQs, provide instant support, and escalate complex issues.", icon: <MessageSquare className="h-8 w-8 text-primary" /> },
    { title: "Sales Assistant Bot", description: "Qualify leads, answer product questions, and schedule demos.", icon: <Briefcase className="h-8 w-8 text-primary" /> },
    { title: "Content Creation Helper", description: "Generate ideas, draft articles, and maintain brand voice.", icon: <Feather className="h-8 w-8 text-primary" /> },
    { title: "Internal Knowledge Bot", description: "Answer team questions based on your internal documentation.", icon: <Bot className="h-8 w-8 text-primary" /> },
    // Add more templates as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-heading">Agent Templates</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started quickly with pre-built templates designed for common use cases. Customize them to fit your exact needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4">{template.icon}</div>
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent> {/* Pushes footer down */}
                <div className="p-6 pt-0"> {/* Footer content */}
                  <Button className="w-full" asChild>
                    <Link to={`/templates/${template.title.toLowerCase().replace(/ /g, '-')}`}>Use Template</Link>
                  </Button>
                </div>
              </Card>
            ))}
             <Card className="flex flex-col border-dashed border-2 items-center justify-center text-center p-6 hover:border-primary hover:bg-primary/5 transition-colors">
                <Bot className="h-12 w-12 text-gray-400 mb-4" />
                <CardTitle className="mb-2">Build Your Own</CardTitle>
                <CardDescription className="mb-4">Start from scratch and create a completely custom agent.</CardDescription>
                <Button variant="outline" asChild>
                  <Link to="/create-agent">Start Building</Link>
                </Button>
              </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
