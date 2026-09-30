import React from "react";
import Title from "../Title";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  return (
    <section className="flex flex-col items-center px-4 md:px-6 lg:px-10 bg-slate-50 pt-10 pb-8">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />
      <TestimonialCard/>
    </section>
  );
}

export default TestimonialsSection;
