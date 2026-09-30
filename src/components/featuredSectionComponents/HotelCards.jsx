import { useDispatch } from "react-redux";
import { assets } from "../../assets/assets";
import { openForm } from "../../redux-store/isFormOpenSlice/isFormOpen";
import { useNavigate } from "react-router-dom";

function HotelCards({ room}) {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const goToRoom = (room) => {
    (navigate(`/rooms/${room._id}`), scrollTo(0, 0));
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] ">
      <img src={room.images[0]} alt="room image" className=" cursor-pointer" onClick={()=>{
        goToRoom(room);
      }} />


      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium text-gray-800 cursor-pointer"  onClick={()=>{
        goToRoom(room);
      }} >{room.roomType}</p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star" /> {room.rating}
          </div>
        </div>
        <p className="text-lg font-medium mt-2  text-zinc-700">
          {room.hotel.name}
        </p>
        <div className="flex items-center gap-1 text-sm mt-3">
          <img src={assets.locationIcon} alt="Location Icon" />
          <span className="">{room.hotel.address}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p>
            <span className="text-lg text-gray-800">${room.pricePerNight}</span>
            /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer"
          onClick={()=>{
            dispatch(openForm(room))
          }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCards;
