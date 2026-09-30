import { useNavigate } from "react-router-dom";
import HotelCards from "../featuredSectionComponents/HotelCards";
import Title from "../Title";
import { useSelector } from "react-redux";

function FeaturedSection() {
  const navigate = useNavigate();
  const roomData= useSelector(state=> state.roomData.roomsData)
  
  
  return (
    
    <section className="flex flex-col items-center px-4 md:px-6 lg:px-10 bg-slate-50 pt-20 pb-8">
      
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />
      <div className="grid px-5 md:px-0 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4">
        {roomData.map((room, idx) => (
          <HotelCards  room={room} key={idx} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-10 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </section>
  );
}

export default FeaturedSection;
