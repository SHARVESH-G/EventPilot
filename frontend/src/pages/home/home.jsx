import React from "react";
import EventCard from "../../components/eventCard/eventCard";

const Home = () => {
  const event = {
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop",
    title: "Neon Nights Festival",
    description:
      "Experience the ultimate electronic music festival with top DJs.",
    location: "Central Park, New York",
    date: { day: "14", month: "APR" },
    price: 120,
    participants: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
      "https://randomuser.me/api/portraits/men/75.jpg",
    ],
  };

  return (
    <div>
      <EventCard event={event} />
    </div>
  );
};

export default Home;
