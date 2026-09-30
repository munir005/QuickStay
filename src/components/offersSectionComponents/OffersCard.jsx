import React from "react";
import { assets, exclusiveOffers } from "../../assets/assets";

function OffersCard() {
  return (
    <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {exclusiveOffers.map((offer, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${offer.image})` }}
        >
          <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
            {offer.priceOff}% OFF
          </p>
          <div>
            <p className="text-2xl font-medium">{offer.title}</p>
            <p>{offer.description}</p>
            <p className="text-xs text-white/70 mt-3">Expires {offer.expiryDate}</p>
          </div>
          <button
            className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5"
          >
            View Offers
            <img
              className=" group-hover:translate-x-1 transition-all"
              src={assets.arrowIcon}
              alt="arrow-icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default OffersCard;
