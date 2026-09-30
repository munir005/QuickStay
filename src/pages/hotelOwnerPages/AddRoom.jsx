import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, hotelDummyData } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../../redux-store/roomDataSlice/roomData";

function AddRoom() {

  const dispatch = useDispatch();

  const [roomImages, setRoomImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [hotel, setHotel] = useState({ name: "Select the Hotel" });

  const [roomData, setRoomData] = useState({
    _id: "",
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
      "Free Breakfast": false,
    },
    images: [null, null, null, null],
    isAvailable: true,
    hotel: hotel,
    createdAt: "",
    updatedAt: "",
    reviews: 0,
    rating: 5,
    description: "",
    __v: 0,
  });

  let amenitiesArr = [];
  Object.keys(roomData.amenities).map((ami) => {
    if (roomData.amenities[ami]) {
      amenitiesArr.push(ami);
    } else {
      amenitiesArr.find((am) => amenitiesArr[am]);
    }
  });

  const roomDat = useSelector((state) => state.roomData.roomsData);

  const submitForm = (e) => {
    e.preventDefault();
    
      let final = {
        ...roomData,
        amenities: amenitiesArr,
        _id: crypto.randomUUID(),
        createdAt: `${new Date().toISOString()}`,
        updatedAt: `${new Date().toISOString()}`,
      };

      dispatch(addRoom(final));


  };

  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <Title
        align="left"
        title="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."
      />
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(roomImages).map((imageNumber) => (
          <label htmlFor={`roomImage${imageNumber}`} key={imageNumber}>
            <img
              src={
                roomImages[imageNumber]
                  ? URL.createObjectURL(roomImages[imageNumber])
                  : assets.uploadArea
              }
              alt="Room Image"
              className="max-h-13 cursor-pointer opacity-80"
            />
            <input
              type="file"
              // required
              id={`roomImage${imageNumber}`}
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                setRoomImages({
                  ...roomImages,
                  [imageNumber]: file,
                });
                setRoomData((prev) => {
                  const updatedImages = [...prev.images];
                  updatedImages[imageNumber - 1] = URL.createObjectURL(file);

                  return {
                    ...prev,
                    images: updatedImages,
                  };
                });
              }}
            />
          </label>
        ))}
      </div>
      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-500 mt-4">Room Type</p>
          <select
            value={roomData.roomType}
            // required
            onChange={(e) =>
              setRoomData({ ...roomData, roomType: e.target.value })
            }
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option hidden>Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div className="">
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            // required
            placeholder="eg:100"
            value={roomData.pricePerNight}
            min={0}
            onChange={(e) =>
              setRoomData({
                ...roomData,
                pricePerNight: Number(e.target.value),
              })
            }
            className="border border-gray-300 mt-1 rounded p-2 w-24"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-800 text-xl mt-4">
          Description
        </label>
        <textarea
          id="description"
          // required
          placeholder="Enter description"
          value={roomData.description}
          onChange={(e) => {
            setRoomData({ ...roomData, description: e.target.value });
          }}
          className="border border-gray-300 mt-1 rounded p-2 w-full outline-gray-400 min-h-17 md:w-3/4 "
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="hotelsSelect">Select Hotel</label>
        <select
          value={hotel.name}
          // required
          onChange={(e) => {
            hotelDummyData.map((hotel) => {
              if (hotel.name.includes(e.target.value)) {
                setHotel(hotel);
                setRoomData({ ...roomData, hotel: hotel });
              }
            });
          }}
          id="hotelsSelect"
          className="border border-gray-300 mt-1 rounded p-1 w-full outline-gray-400  md:w-44 "
        >
          <option disabled defaultValue={hotel.name}>
            {hotel.name}
          </option>
          {hotelDummyData.map((hotel, idx) => (
            <option key={idx} value={hotel.name}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-gray-800 mt-4">Amenities</p>
        <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
          {Object.keys(roomData.amenities).map((amenity, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                id={`amenity${idx + 1}`}
                checked={roomData.amenities[amenity]}
                onChange={() =>
                  setRoomData({
                    ...roomData,
                    amenities: {
                      ...roomData.amenities,
                      [amenity]: !roomData.amenities[amenity],
                    },
                  })
                }
              />
              <label htmlFor={`amenity${idx + 1}`}> {amenity}</label>
            </div>
          ))}
        </div>
      </div>
      <button
        // disabled={!isAllValid}
        type="submit"
        className=" enabled:hover:bg-[#184ab7] bg-[#2563EB] disabled:opacity-50 text-white px-8 py-2 rounded mt-8 cursor-pointer"
      >
        Add Room
      </button>
    </form>
  );
}

export default AddRoom;
