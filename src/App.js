import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import About from "./Pages/HomePage/About/About";
import BookingList from "./Pages/HomePage/BookingList/BookingList";
import Home from "./Pages/HomePage/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Present-Booking" element={<About/>}></Route>
        <Route path="/Booking-List" element={<BookingList/>}></Route>
        <Route path="/Dashboard" element={<DashBoard/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
