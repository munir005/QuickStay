import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData } from "../assets/assets";
import RatingStars from "../components/testimonialsSection/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { dataEdit, openForm } from "../redux-store/isFormOpenSlice/isFormOpen";

function RoomDetails() {
  const { id } = useParams();

  const roomData = useSelector((state) => state.roomData.roomsData);

  const dispatch = useDispatch()

  const [room, setRoom] = useState(null);

  const [dates, setDates] = useState({
    checkInDate: `${new Date().toISOString().split("T")[0]}`,
    checkOutDate: "",
  });

  const [mainImg, setMainImg] = useState(null);
  useEffect(() => {
    const room = roomData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImg(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-6 lg:px-10 xl :px-32">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-[2rem]">
            {room.roomType}
            <span className=" text-sm">({room.hotel.name})</span>
          </h1>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <RatingStars rating={room.rating} />
          <span className="ml-2">{room.reviews}+ reviews</span>
        </div>
        <div className="flex items-center text-gray-500 gap-1 mt-2">
          <img src={assets.locationIcon} alt="Location Icon" />
          <p>{room.hotel.address}</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-xl shadow-lg object-cover"
              src={mainImg}
              alt="Main Room Image"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room.images.length > 1 &&
              room.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt="Room Image"
                  onClick={() => setMainImg(image)}
                  className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImg === image && "outline-3 outline-orange-500"}`}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h2 className="text-3x1 md:text-4xl">{room.description} </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
              {room.amenities.map((item, idx) => (
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200"
                  key={idx}
                >
                  <img
                    src={facilityIcons[item]}
                    alt={`${item} Icon`}
                    className="w-5 h-5"
                  />
                  <span className="text-sx">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-2xl font-medium">
            ${room.pricePerNight}/night
          </span>
        </div>
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl" 
        onSubmit={(e)=>{
          e.preventDefault()
          dispatch(openForm(room))
          dispatch(dataEdit(dates))
        }}
        >



            <div className="flex flex-col w-full md:w-fit">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                value={dates.checkInDate}
                min={new Date().toISOString().split("T")[0]}
                max={dates.checkOutDate}
                onChange={(e)=>{
                  setDates({...dates, checkInDate: e.target.value})
                }}
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 hidden md:block"></div>
            <div className="flex flex-col w-full md:w-fit">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                value={dates.checkOutDate}
                min={dates.checkInDate}
                onChange={(e)=>{
                  setDates({...dates, checkOutDate: e.target.value})
                }}
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 hidden md:block"></div>
          <button
            type="submit"
            onClick={()=>{
            }}
            className="bg-[#2563EB] hover:bg-[#114ed0] active: scale-95 transition-all text-white rounded-md w-full md:w-fit mt-6 px-25 md:px-6 md:py-3 py-4 text-base cursor-pointer"
          >
            Book Now
          </button>
        </form>

        <div className="mt-20 space-y-4">
          {roomCommonData.map((details, idx) => (
            <div className="flex items-center gap-2" key={idx}>
              <img src={details.icon} alt="Icon" className="w-6.5" />
              <div>
                <p className="text-base ">{details.title}</p>
                <p className="text-gray-500">{details.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3x1 border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling .
          </p>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Owner"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg md:text-xl lg:text-2xl">
                Hosted by {room.hotel.owner.username}
              </p>
              <div className="flex flex-wrap items-center mt-1 gap-4 text-sm">
                <div className="flex items-center">
                  <RatingStars rating={room.hotel.owner.rating} />
                  <span className="ml-2">
                    {room.hotel.owner.reviews}+ reviews
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">Response rate:</span>
                  <span className="ml-2">100%</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">Response time:</span>
                  <span className="ml-2">30 min</span>
                </div>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-[#2563EB] hover:bg-[#114ed0] transition-all cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
}

export default RoomDetails;
