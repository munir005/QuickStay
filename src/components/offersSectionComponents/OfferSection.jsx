import React from "react";
import { assets } from "../../assets/assets";
import Title from "../Title";
import OffersCard from "./OffersCard";

function OfferSection() {
  return (
    <section className="flex flex-col items-center md:px-6 lg:px-10 xl:px-32  py-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
        />

        <button className="group flex items-center gap-2 font-medium cursor-pointer ">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all invert"
          />
        </button>
      </div>
      <OffersCard />
    </section>
  );
}

export default OfferSection;
