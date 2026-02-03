import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Footer from "./components/footer/footer";
import CreateMyEvent from "./pages/createMyEvent/createMyEvent";
import RegisteredEventPage from "./pages/registeredEvent/registeredEventPage";
import UserCreatedEventCardPage from "./pages/userCreatedEvent/userCreatedEventPage";
import EventDetailsPage from "./pages/eventDetailPage/eventDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/createnewevent" element={<CreateMyEvent/>}/>
        <Route path="/registeredevents" element={<RegisteredEventPage/>}/>
        <Route path="/myevents" element={<UserCreatedEventCardPage/>}/>
        <Route path="/event/:id" element={<EventDetailsPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
``
