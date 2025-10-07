"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Дисциплина",
    description:
      "Ответственность, порядок и уважение к правилам формируют характер участника.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/img/IMG_8524.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="discipline"
        />
      </div>
    ),
  },
  {
    title: "Командная работа",
    description:
      "Учимся действовать вместе, поддерживать друг друга и достигать цели как единая команда.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/img/CtZpA6lurTY.jpg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="team"
        />
      </div>
    ),
  },
  {
    title: "Сила духа",
    description:
      "Преодолевая вызовы, участники развивают устойчивость и уверенность в себе.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/img/i.webp"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="spirit"
        />
      </div>
    ),
  },
  {
    title: "Патриотизм",
    description:
      "Формируем уважение к Родине и понимание важности службы обществу.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/img/og_og_1532849115343269060.jpg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="patriotism"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
