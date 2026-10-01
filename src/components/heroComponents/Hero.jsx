import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import heroImage from '../../assets/heroImage.webp'

function Hero() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center px-6  lg:px-10 xl:px-32 text-white bg-no-repeat bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${heroImage})` }} >
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>
      <h1 className="  text-2xl md:text-5xl  md:leading-14 font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Gateway Destination
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today .
      </p>

      <button className="flex group items-center justify-center gap-1 rounded-md bg-[#7f4d04] py-2 px-4 text-white cursor-pointer mt-5 " 
      onClick={()=>{
        navigate("/rooms");
        scrollTo(0,0)
      }}
      >
        <span>Get Started</span>
        <img src={assets.arrowIcon} alt="Search Icon" className=" group-hover:translate-x-1 transition-all" />
      </button>
    </div>
  );
}

export default Hero;
