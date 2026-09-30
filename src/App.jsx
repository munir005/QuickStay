import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import Layout from "./pages/hotelOwnerPages/Layout";
import Dashboard from "./pages/hotelOwnerPages/Dashboard";
import AddRoom from "./pages/hotelOwnerPages/AddRoom";
import ListOfRooms from "./pages/hotelOwnerPages/ListOfRooms";
import { useSelector } from "react-redux";
import RoomRegistration from "./components/RoomRegistrationComponents/RoomRegistration";

export default function App() {
  const isFormOpen = useSelector((state) => state.isFormOpen.value);
  return (
    <div>
      <Navbar />
      {isFormOpen && <RoomRegistration />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="list-room" element={<ListOfRooms />} />
            <Route path="add-room" element={<AddRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
