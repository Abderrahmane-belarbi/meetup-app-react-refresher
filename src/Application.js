import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

export default function Application() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}
