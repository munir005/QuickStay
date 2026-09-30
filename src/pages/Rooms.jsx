import { assets, facilityIcons} from "../assets/assets";
import { useNavigate } from "react-router-dom";
import RatingStars from "../components/testimonialsSection/RatingStars";
import { useState } from "react";
import { useSelector } from "react-redux";

function Rooms() {
  const crateCheckbox = (
    idx,
    label,
    isChecked = false,
    onChangeFnc = () => {},
  ) => {
    return (
      <label
        key={idx}
        className="flex gap-3 items-center cursor-pointer mt-2 text-sm"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChangeFnc(e.target.checked, label)}
          id="checkbox"
        />
        <span className="font-light select-none">{label}</span>
      </label>
    );
  };
  const crateRadioBtn = (
    idx,
    label,
    isChecked = false,
    onChangeFnc = () => {},
  ) => {
    return (
      <label
        key={idx}
        className="flex gap-3 items-center cursor-pointer mt-2 text-sm"
        htmlFor="radioBtn"
      >
        <input
          type="radio"
          checked={isChecked}
          onChange={() => onChangeFnc(label)}
          name="sortLabel"
          id="radioBtn"
        />
        <span className="font-light select-none">{label}</span>
      </label>
    );
  };

  const navigate = useNavigate();
  const [isFilterShow, setIsFilterShow] = useState(false);

  1;

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const goToRoom = (room) => {
    (navigate(`/rooms/${room._id}`), scrollTo(0, 0));
  };

  const roomData = useSelector((state) => state.roomData.roomsData);

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-6 lg:px-10 xl:px-32">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl md:text-[2.5rem]">Hotels Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories .
        </p>
      </div>
      <div className="flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:w-[70%]">
          {roomData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
            >
              <img
                onClick={() => {
                  goToRoom(room);
                }}
                title="View Rooms Details"
                src={room.images[0]}
                alt="Hotel-image"
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              />
              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    goToRoom(room);
                  }}
                  className="text-gray-800 text-3xl cursor-pointer"
                >
                  {room.roomType}
                </p>
                <p className="text-gray-800 text-2xl ">
                  {room.hotel.name}
                </p>
                <div className="flex items-center">
                  <RatingStars rating={room.rating} />
                  <span className="ml-2">{room.reviews}+ Reviews</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <img src={assets.locationIcon} alt="Location Icon" />
                  <span className="text-gray-600">{room.hotel.address}</span>
                </div>
                <div className=" flex flex-wrap items-center mt-3 mb-6 gap-4">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex flex-wrap items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70"
                    >
                      <img
                        src={facilityIcons[amenity]}
                        className="w-5 h-5"
                        alt={amenity}
                      />
                      <span className="text-xs">{amenity}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-medium text-gray-700">
                  ${room.pricePerNight}/night
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white w-80 border lg:w-[25%] border-gray-300 text-gray-600 lg:mb-8 mt-16">
          <div
            className={`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${isFilterShow && "border-b"}`}
          >
            <span>Filters</span>
            <div className="text-xs cursor-pointer">
              <span
                onClick={() => {
                  setIsFilterShow(!isFilterShow);
                }}
                className="lg:hidden select-none"
              >
                {isFilterShow ? "HIDE" : "SHOW"}
              </span>
              <span className="hidden lg:block">CLEAR</span>
            </div>
          </div>
          <div
            className={`${isFilterShow ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
          >
            <div className="px-4 pt-4">
              <span className="uppercase">Popular Filters</span>
              {roomTypes.map((type, idx) => crateCheckbox(idx, type))}
            </div>

            <div className="px-4 pt-4 pb-7">
              <span className="uppercase">Sort By</span>
              {sortOptions.map((option, idx) => crateRadioBtn(idx, option))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
