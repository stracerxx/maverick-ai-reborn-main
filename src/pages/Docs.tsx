import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, PlayCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const DocsPage = () => {
  const sections = [
    { title: "Getting Started", description: "Learn the basics of creating and deploying your first agent.", icon: <PlayCircle className="h-6 w-6 text-primary" />, link: "/docs/getting-started" },
    { title: "Agent Configuration", description: "Dive deeper into customizing agent behavior, knowledge, and personality.", icon: <Settings className="h-6 w-6 text-primary" />, link: "/docs/configuration" },
    { title: "API Reference", description: "Integrate Maverick AI with your custom applications using our API.", icon: <Code className="h-6 w-6 text-primary" />, link: "/docs/api" },
    { title: "Tutorials & Guides", description: "Step-by-step guides for specific use cases and advanced features.", icon: <BookOpen className="h-6 w-6 text-primary" />, link: "/docs/tutorials" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-heading">Documentation</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find everything you need to build, train, and deploy powerful AI agents with Maverick AI.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full h-12 pl-10 pr-4 rounded-full shadow-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <Link to={section.link} key={index} className="block hover:no-underline">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    {section.icon}
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{section.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocsPage;
