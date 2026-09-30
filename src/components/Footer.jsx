import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-[#dcdcdc] px-6  lg:px-10 xl:px-32 pt-8 w-full text-black">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        <div className="max-w-96">
          <img src={assets.logo} alt="Logo" />
          <p className="mt-6 text-sm text-gray-800">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a href="#">
              <img src={assets.instagramIcon} alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src={assets.twitterIcon} alt="Twitter" />
            </a>
            <a href="#">
              <img src={assets.facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={assets.linkendinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">Quick Links</h2>
            <ul className="text-sm text-gray-800 space-y-2 list-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Hotels</Link>
              </li>
              <li>
                <Link to="/">Experience</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
            <ul className="text-sm text-gray-800 space-y-2 list-none">
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2026 © QuickStay. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
