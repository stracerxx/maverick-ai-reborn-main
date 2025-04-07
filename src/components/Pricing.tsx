import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for personal projects and experimentation",
      features: [
        "1 AI agent",
        "100 messages per month",
        "Basic customization",
        "Web embedding",
        "Community support"
      ],
      mostPopular: false,
      buttonText: "Start for Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Everything you need for professional use",
      features: [
        "5 AI agents",
        "2,500 messages per month",
        "Advanced customization",
        "Web & API access",
        "Analytics dashboard",
        "Priority support",
        "Custom training data"
      ],
      mostPopular: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "For teams and organizations with advanced needs",
      features: [
        "Unlimited agents",
        "10,000 messages per month",
        "Complete customization",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees"
      ],
      mostPopular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for you. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.mostPopular ? 'border-primary shadow-lg' : 'border'}`}>
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.buttonVariant} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4 font-heading">Need a custom plan?</h3>
          <p className="text-gray-600 mb-6">
            Contact our sales team for enterprise solutions, custom integrations, 
            or specific compliance requirements.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
