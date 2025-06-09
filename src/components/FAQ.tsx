
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What makes DataFlow different from other analytics platforms?",
      answer: "DataFlow combines advanced AI algorithms with real-time processing capabilities to provide insights that go beyond traditional analytics. Our platform learns from your data patterns and provides predictive analytics automatically."
    },
    {
      question: "How secure is my data with DataFlow?",
      answer: "We implement bank-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected both in transit and at rest, with strict access controls and monitoring."
    },
    {
      question: "Can I integrate DataFlow with my existing tools?",
      answer: "Yes! DataFlow offers comprehensive API access and pre-built integrations with over 100 popular business tools including Salesforce, HubSpot, Google Analytics, and more."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support tiers depending on your plan, from email support for Starter plans to 24/7 dedicated support for Enterprise customers. All plans include access to our comprehensive documentation and community forums."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to Professional plan features. No credit card required to get started."
    },
    {
      question: "How does the pricing scale with my usage?",
      answer: "Our pricing is transparent and scales with your team size and data usage. You can easily upgrade or downgrade your plan as your needs change, with no long-term contracts required."
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about DataFlow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
