import { Route, Routes } from "react-router-dom";
import "./Application.css";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

export default function Application() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AllMeetups />} />

        <Route path="/new" element={<NewMeetup />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
