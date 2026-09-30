import React, { useState } from "react";
import Title from "../../components/Title";
import { useSelector } from "react-redux";

function ListOfRooms() {
  const roomData = useSelector((state) => state.roomData.roomsData);
  const [allRooms, setAllRooms] = useState(roomData);

  return (
    <div>
      <Title
        align="left"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl mt-3 md:border md:border-gray-300 md:rounded-lg md:max-h-80 md:overflow-y-scroll">
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Hotel
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Price /night
              </th>
            </tr>
          </thead>

          <tbody className="block md:table-row-group">
            {allRooms.map((room) => (
              <tr
                key={room._id}
                className="
                  block mb-4 rounded-xl border border-gray-300 bg-white p-4 shadow-sm
                  md:table-row md:mb-0 md:rounded-none md:border-0 md:border-t md:border-gray-300 md:shadow-none md:p-0
                "
              >
                {/* Name */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700">
                  <div className="flex items-start justify-between gap-3 md:block">
                    <span className="font-medium text-gray-800 md:font-normal">
                      {room.roomType}
                    </span>

                    <span className="md:hidden text-sm  text-gray-700">
                      {room.hotel.name}
                    </span>
                  </div>
                </td>

                <td className="hidden md:table-cell md:py-3 md:px-4 md:text-center text-sm  text-gray-700">
                  {room.hotel.name}
                </td>

                {/* Facility */}
                <td className="block md:table-cell md:py-3 md:px-4  mt-3 md:mt-0 border-t border-gray-200 md:border-0 pt-3 md:pt-0">
                  <p className="text-xs font-semibold text-gray-500 md:hidden">
                    Facility
                  </p>
                  <p className="text-sm text-gray-700  mt-0.5 md:mt-0">
                    {room.amenities.join(", ")}
                  </p>
                </td>

                {/* Price */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700 mt-3 md:mt-0 border-t border-gray-200 md:border-0 pt-3 md:pt-0">
                  <p className="text-xs font-semibold text-gray-500 md:hidden">
                    Price / night
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5 md:mt-0">
                    $ {room.pricePerNight}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOfRooms;
