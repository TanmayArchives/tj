import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Do you accept custom artwork requests?",
      answer:
        "Yes, I specialize in creating custom paintings tailored to your requirements, whether for personal collections, businesses, or interior spaces.",
    },
    {
      question: "How long does it take to complete a custom painting?",
      answer:
        "The time required depends on the complexity and size of the painting. Typically, it can take anywhere from 2 to 6 weeks.",
    },
    {
      question: "Can I purchase existing artwork directly from the gallery?",
      answer:
        "Absolutely! You can browse the gallery on the website and contact me directly to inquire about availability and pricing.",
    },
  ];

  return (
    <section className="py-8 mt-20 sm:py-20 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-accent rounded-lg px-4"
            >
              <AccordionTrigger className="font-bold text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
