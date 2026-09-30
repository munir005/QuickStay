import React from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useSelector } from "react-redux";

function Dashboard() {
  const dashboardData = useSelector(
    (state) => state.userBookedData.dashboardData
  );

  return (
    <div>
      <Title
        align="left"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* ================= STATS CARDS ================= */}
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        {/* Total Bookings */}
        <div className="bg-[#2564eb10] border border-[#2564ebd9] rounded flex p-4 pr-8 w-full sm:w-auto">
          <img
            src={assets.totalBookingIcon}
            alt="Total booking Icon"
            className="hidden md:block h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-[#2564eb10] border border-[#2564ebd9] rounded flex p-4 pr-8 w-full sm:w-auto">
          <img
            src={assets.totalRevenueIcon}
            alt="Total revenue Icon"
            className="hidden md:block h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              $ {dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      {/* ================= SINGLE RESPONSIVE TABLE ================= */}
      <div className="w-full max-w-3xl md:border md:border-gray-300 md:rounded-lg md:max-h-80 md:overflow-y-scroll">
        <table className="w-full border-collapse">
          {/* ===== HEADER (sirf desktop) ===== */}
          <thead className="hidden md:table-header-group bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                User Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Hotel Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>

          {/* ===== BODY ===== */}
          <tbody className="block md:table-row-group">
            {dashboardData.bookings.map((booking) => (
              <tr
                key={booking._id}
                className="
                  block mb-4 rounded-xl border border-gray-300 bg-white p-4 shadow-sm
                  md:table-row md:mb-0 md:rounded-none md:border-0 md:border-t md:border-gray-300 md:shadow-none md:p-0
                "
              >
                {/* ===== USER NAME ===== */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700">
                  <div className="flex items-start justify-between gap-3 md:block">
                    <span className="font-medium text-gray-800 md:font-normal">
                      {booking.user.userName}
                    </span>

                    {/* Payment badge — mobile pe yahan */}
                    <span className="md:hidden">
                      <span
                        className={`inline-block py-1 px-3 text-xs rounded-full ${
                          booking.isPaid
                            ? "bg-green-200 text-green-600"
                            : "bg-amber-200 text-yellow-600"
                        }`}
                      >
                        {booking.isPaid ? "Completed" : "Pending"}
                      </span>
                    </span>
                  </div>
                </td>

                {/* ===== ROOM NAME ===== */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700 mt-3 md:mt-0 border-t border-gray-200 md:border-0 pt-3 md:pt-0">
                  <p className="text-xs font-semibold text-gray-500 md:hidden">
                    Room
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5 md:mt-0">
                    {booking.room.roomType}
                  </p>
                </td>

                {/* ===== HOTEL NAME ===== */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700 mt-3 md:mt-0 border-t border-gray-200 md:border-0 pt-3 md:pt-0">
                  <p className="text-xs font-semibold text-gray-500 md:hidden">
                    Hotel
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5 md:mt-0">
                    {booking.hotel.name}
                  </p>
                </td>

                {/* ===== TOTAL AMOUNT ===== */}
                <td className="block md:table-cell md:py-3 md:px-4 md:text-gray-700 mt-3 md:mt-0 border-t border-gray-200 md:border-0 pt-3 md:pt-0">
                  <p className="text-xs font-semibold text-gray-500 md:hidden">
                    Total Amount
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5 md:mt-0">
                    $ {booking.totalPrice}
                  </p>
                </td>

                {/* ===== PAYMENT STATUS (desktop only) ===== */}
                <td className="hidden md:table-cell md:py-3 md:px-4 md:text-center">
                  <button
                    className={`py-1 px-3 text-xs rounded-full ${
                      booking.isPaid
                        ? "bg-green-200 text-green-600"
                        : "bg-amber-200 text-yellow-600"
                    }`}
                  >
                    {booking.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;