import { assets } from "../assets/assets";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { editUserStatus } from "../redux-store/bookedDataSlice/bookedData";

function MyBooking() {
  const userBookings = useSelector((state) => state.userBookedData.userData);
  const dispatch = useDispatch()
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div className="py-28 md:py-35 px-4 md:px-6 lg:px-10 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="w-full">
        <table className="w-full text-left border-collapse">
          {/* ================= HEADER (sirf md+ pe dikhega) ================= */}
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-gray-300">
              <th className="px-4 py-4 font-medium text-gray-900">Hotels</th>
              <th className="px-4 py-4 font-medium text-gray-900">
                Date & Timings
              </th>
              <th className="px-4 py-4 font-medium text-gray-900">Payment</th>
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody className="block md:table-row-group">
            {userBookings.map((user) => (
              <tr
                key={user._id}
                className="
                  block mb-4 border border-gray-200 rounded-xl bg-white shadow-sm p-4
                  md:table-row md:mb-0 md:border-0 md:border-b md:border-gray-300 md:rounded-none md:shadow-none md:p-0
                "
              >
                {/* ===== HOTEL DETAILS ===== */}
                <td className="block md:table-cell md:px-4 md:py-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={user.room.images[0]}
                      alt={user.room.hotel.name}
                      className="h-24 w-32 shrink-0 rounded-lg object-cover lg:h-24.75 lg:w-36"
                    />

                    <div className="min-w-0 space-y-1">
                      <h3 className="font-serif text-base flex items-center gap-1 text-gray-800 lg:text-lg">
                        {user.room.roomType}
                        <span className="font-sans text-xs">
                          ({user.room.hotel.name})
                        </span>
                      </h3>

                      <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        <img src={assets.locationIcon} alt="Icon" />
                        {user.hotel.address}
                      </p>

                      <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        <img src={assets.guestsIcon} alt="Icon" />
                        <span>Guests: {user.guests}</span>
                      </p>

                      <p className="text-md text-gray-800">
                        Total: ${user.totalPrice}
                      </p>
                    </div>
                  </div>
                </td>

                {/* ===== DATE & TIMINGS ===== */}
                <td className="block md:table-cell md:px-4 md:py-4 mt-4 md:mt-0 border-t border-gray-200 md:border-0 pt-4 md:pt-0">
                  <div className="flex flex-wrap gap-6 lg:gap-12">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700">
                        Check-In:
                      </h4>
                      <p className="mt-1 whitespace-nowrap text-xs text-gray-500">
                        {formatDate(user.checkInDate)}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-700">
                        Check-Out:
                      </h4>
                      <p className="mt-1 whitespace-nowrap text-xs text-gray-500">
                        {formatDate(user.checkOutDate)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* ===== PAYMENT ===== */}
                <td className="block md:table-cell md:px-4 md:py-4 mt-4 md:mt-0 border-t border-gray-200 md:border-0 pt-4 md:pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-3 md:flex-col md:items-start md:justify-start md:gap-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          user.isPaid ? "bg-green-600" : "bg-red-600"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          user.isPaid ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {user.isPaid ? "Paid" : "Unpaid"}
                      </span>
                    </div>

                    {!user.isPaid && (
                      <button className="rounded-full border border-gray-500 px-5 py-1.5 text-xs text-gray-700 transition hover:bg-gray-100 cursor-pointer"
                      onClick={()=>{
                        const data = {
                          id: user._id,
                          paid: true,
                        }
                        dispatch(editUserStatus(data))
                      }}
                      >
                        Pay now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBooking;