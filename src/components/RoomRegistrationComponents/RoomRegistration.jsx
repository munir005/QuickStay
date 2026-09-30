import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { closeForm } from "../../redux-store/isFormOpenSlice/isFormOpen";
import { useState } from "react";
import { bookRoom } from "../../redux-store/bookedDataSlice/bookedData";

function RoomRegistration() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userBookedData.userData);
  const room = useSelector((state) => state.isFormOpen.room);
  const dataEdit = useSelector((state) => state.isFormOpen.dataEdit);
  
  let dummyData = {
    _id: crypto.randomUUID(),
    user: {
      userName: "",
      userContactNo: "",
      userAddress: "",
    },
    room: room,
    hotel: room.hotel,
    checkInDate: dataEdit.checkIn || `${new Date().toISOString().split("T")[0]}`,
    checkOutDate: dataEdit.checkOut|| "",
    totalPrice: room.pricePerNight,
    guests: 1,
    isPaid: dataEdit.isPaid || true,
    __v: 0,
  };
  
  const [userData, setUserData] = useState(dummyData);

  const changeState = (e, state) => {
    setUserData({
      ...userData,
      user: { ...userData.user, [state]: e.target.value },
    });
  };

  const handelPayNow = ()=>{
    setUserData({...userData, isPaid: true})
  }
  const handelRegister = ()=>{
    setUserData({...userData, isPaid: false})
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    setUserData({...userData, _id: crypto.randomUUID()});
    dispatch(bookRoom(userData));
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70 p-4 md:py-4">
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className=" relative p-4  bg-white rounded-xl  w-full h-full md:w-3/4  overflow-y-auto"
      >
        <img
          onClick={() => {
            dispatch(closeForm());
          }}
          src={assets.closeIcon}
          alt="Close Icon"
          className="absolute top-4 right-4 h-4 w-4 cursor-pointer transition-all duration-300 hover:rotate-180"
        />

        <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>
        <div className="flex flex-col md:flex-row md:gap-7">
          
          <div className="w-full mt-3">
            <label htmlFor="roomName" className="font-medium text-gray-500">
              Room Name
            </label>
            <input
              value={room.roomType}
              disabled
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="roomName"
            />
          </div>
          <div className="w-full mt-3">
            <label htmlFor="hotelName" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              disabled
              value={room.hotel.name}
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="hotelName"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="w-full mt-3">
            <label htmlFor="hotelAddress" className="font-medium text-gray-500">
              Address
            </label>
            <input
              disabled
              value={room.hotel.address}
              type="text"
              placeholder="Your Address"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="hotelAddress"
            />
          </div>
          <div className="w-full mt-4 ">
            <label htmlFor="price" className="font-medium text-gray-500">
              Price
            </label>
            <input
              type="text"
              id="price"
              disabled
              value={`$ ${room.pricePerNight}/night`}
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="w-full mt-3">
            <label htmlFor="name" className="font-medium text-gray-500">
              Your Name
            </label>
            <input
              value={userData.user.userName}
              onChange={(e) => {
                changeState(e, "userName");
              }}
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="name"
              required
            />
          </div>
          <div className="w-full mt-3">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              value={userData.user.userContactNo}
              onChange={(e) => {
                changeState(e, "userContactNo");
              }}
              type="tel"
              placeholder="e.g: 0123456789"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="contact"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="w-full mt-3">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              value={userData.user.userAddress}
              onChange={(e) => {
                changeState(e, "userAddress");
              }}
              type="text"
              placeholder="Enter Your Address"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="address"
              required
            />
          </div>
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="guest" className="font-medium text-gray-500">
              Guests
            </label>
            <select
              value={userData.guests}
              onChange={(e) => {
                setUserData({ ...userData, guests: e.target.value });
              }}
              id="guest"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="w-full mt-3">
            <label htmlFor="check-in" className="font-medium text-gray-500">
              Check In
            </label>
            <input
              value={userData.checkInDate}
              min={new Date().toISOString().split("T")[0]}
              max={userData.checkOutDate}
              onChange={(e) => {
                setUserData({ ...userData, checkInDate: e.target.value });
              }}
              type="date"
              placeholder="Enter Check In Date"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="check-in"
              required
            />
          </div>
          <div className="w-full mt-3">
            <label htmlFor="check-out" className="font-medium text-gray-500">
              Check Out
            </label>
            <input
              value={userData.checkOutDate}
              min={userData.checkInDate}
              onChange={(e) => {
                setUserData({ ...userData, checkOutDate: e.target.value });
              }}
              type="date"
              placeholder="Enter Check Out Date"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light "
              id="check-out"
              required
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-green-500 hover:bg-green-600 transition-all text-white  px-6 py-2 rounded cursor-pointer "
          type="submit" 
          onClick={()=>{
            handelPayNow()
          }}
          >
            Pay Now
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white  px-6 py-2 rounded cursor-pointer " 
          onClick={()=>{
            handelRegister();
          }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoomRegistration;
