"use client";

import { Section } from "@/components/layout/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Кто может участвовать?",
    a: "Подростки и студенты. Возраст уточним вместе с вами (обычно 14–19).",
  },
  {
    q: "Нужен ли опыт?",
    a: "Нет. Инструктора помогают и контролируют безопасность на каждом шаге.",
  },
  { q: "Какая экипировка нужна?", a: "Удобная спортивная форма и закрытая обувь. Остальное мы подскажем в брифе." },
  {
    q: "Как обеспечивается безопасность?",
    a: "Программа проходит под руководством инструкторов с соблюдением правил и норм безопасности.",
  },
  { q: "Сколько длится программа?", a: "Один день. Время начала/окончания сообщаем заранее." },
];

export function FAQ() {
  return (
    <Section id="s9" subtitle="FAQ / Safety" title="Вопросы и безопасность">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
