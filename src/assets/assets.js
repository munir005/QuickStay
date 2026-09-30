import logo from "./logo.svg";
import darkLogo from "./logo-dark.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  logo,
  darkLogo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = [
  "Dubai",
  "Singapore",
  "New York",
  "London",
  "Lahore",
  "Karachi",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = [
  {
    _id: crypto.randomUUID(),
    username: "Great Stack",
    email: "user.greatstack@gmail.com",
    image:
      "https://plus.unsplash.com/premium_photo-1722859326392-f9f7120bf430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHx8MA%3D%3D",
    role: "hotelOwner",
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 1,
    recentSearchedCities: ["New York"],
    reviews: 240,
    rating: 4,
  },
  {
    _id: crypto.randomUUID(),
    username: "Khalid",
    email: "user.khslid@gmail.com",
    image:
      "https://plus.unsplash.com/premium_photo-1722859326392-f9f7120bf430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHx8MA%3D%3D",
    role: "hotelOwner",
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 1,
    recentSearchedCities: ["Karachi"],
    reviews: 250,
    rating: 4,
  },
];

// Hotel Dummy Data
export const hotelDummyData = [
  {
    _id: crypto.randomUUID(),
    name: "jelesh konty",
    address: "Main Road  123 Street , 23 Colony",
    contact: "+0123456789",
    owner: userDummyData[0],
    city: "New York",
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    name: "AlHukam hotels",
    address: "Anar kali bzar  123 Street , 23 Colony",
    contact: "+9223456789",
    owner: userDummyData[1],
    city: "Lahore",
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 0,
  },
];

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: crypto.randomUUID(),
    hotel: hotelDummyData[0],
    roomType: "Luxury Room",
    pricePerNight: 399,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    reviews: 200,
    rating: 4.9,
    description: "Experience Luxury Like Never Before",
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    hotel: hotelDummyData[0],
    roomType: "Double Bed",
    pricePerNight: 299,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    reviews: 220,
    rating: 4.5,
    description: "Experience Luxury Like Never Before",
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    hotel: hotelDummyData[1],
    roomType: "Luxury Room",
    pricePerNight: 249,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    reviews: 180,
    rating: 4,
    description: "Experience Luxury Like Never Before",
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    hotel: hotelDummyData[0],
    roomType: "Single Bed",
    pricePerNight: 199,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    reviews: 250,
    rating: 4.3,
    description: "Experience Luxury Like Never Before",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: crypto.randomUUID(),
    user: {
      userName: "john doe",
      userContactNo: "0123456789",
      userAddress: "123 street, etc",
    },
    room: roomsDummyData[1],
    hotel: hotelDummyData[0],
    checkInDate: `${new Date().toISOString()}`,
    checkOutDate: `${new Date().toISOString()}`,
    totalPrice: 299,
    guests: 1,
    isPaid: true,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    user: {
      userName: "clay josf",
      userAddress: "123 street, etc",
      userContactNo: "0123456789",
    },
    room: roomsDummyData[0],
    hotel: hotelDummyData[0],
    checkInDate: `${new Date().toISOString()}`,
    checkOutDate: `${new Date().toISOString()}`,
    totalPrice: 399,
    guests: 2,
    isPaid: false,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 0,
  },
  {
    _id: crypto.randomUUID(),
    user: {
      userName: "kmary pand",
      userAddress: "123 street, etc",
      userContactNo: "0123456789",
    },
    room: roomsDummyData[3],
    hotel: hotelDummyData[1],
    checkInDate: `${new Date().toISOString()}`,
    checkOutDate: `${new Date().toISOString()}`,
    totalPrice: 199,
    guests: 1,
    isPaid: false,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: userBookingsDummyData.length,
  totalRevenue: userBookingsDummyData.reduce((total, userdata) => {
    return total + userdata.totalPrice;
  }, 0),
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
