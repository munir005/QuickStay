import React from "react";
import Hero from "../components/heroComponents/Hero";
import FeaturedSection from "../components/featuredSectionComponents/FeaturedSection";
import OfferSection from "../components/offersSectionComponents/OfferSection";
import TestimonialsSection from "../components/testimonialsSection/TestimonialsSection";


function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <OfferSection/>
      <TestimonialsSection />
    </>
  );
}

export default Home;
