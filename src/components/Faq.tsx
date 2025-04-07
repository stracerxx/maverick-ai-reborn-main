import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "What is an AI agent?",
      answer: "An AI agent is an intelligent assistant powered by machine learning that can understand natural language, learn from examples, and perform specific tasks according to your instructions. Maverick AI agents can be customized for customer support, content creation, sales assistance, and many other applications."
    },
    {
      question: "Do I need technical knowledge to create an agent?",
      answer: "No technical knowledge is required. Our platform is designed to be user-friendly, with a simple interface that guides you through the process of creating, training, and deploying your AI agent. You describe what you want your agent to do, provide some examples, and our system handles the technical implementation."
    },
    {
      question: "How do I train my AI agent?",
      answer: "Training your agent is simple. You provide examples of conversations, upload knowledge documents, or directly specify information you want your agent to know. Our platform uses advanced machine learning to understand your requirements and train your agent accordingly. You can test and refine your agent's responses in real-time."
    },
    {
      question: "Where can I deploy my AI agents?",
      answer: "Maverick AI agents can be deployed on your website via a simple embed code, integrated with messaging platforms, or accessed through our API for custom applications. They can also run as standalone chatbots on our platform with a shareable link."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We do not use your private data to train our models without explicit permission, and you retain ownership of all your content. For enterprise plans, we offer additional security features including custom data retention policies."
    },
    {
      question: "What happens if my agent doesn't know the answer?",
      answer: "You can configure how your agent handles unknown questions. Options include acknowledging knowledge gaps, offering to connect with a human operator, or using web search capabilities to find relevant information. You can also review conversation logs to identify areas where your agent needs additional training."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We've got answers. If you can't find what you're looking for, 
            reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
