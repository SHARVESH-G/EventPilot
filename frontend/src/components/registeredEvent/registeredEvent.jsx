import React, { useEffect, useState } from "react";
import "./registeredEvent.css";
import {
  BadgeIndianRupee,
  Hourglass,
  Target,
  CalendarDays,
  MapPin
} from "lucide-react";

const RegisteredEventCard = ({ event }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(event.date) - new Date();
    if (diff <= 0) return "Event Started";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const seatsLeft = event.seats - (event.registeredUser?.length || 0);

  return (
    <div className="modern-ticket">
      <div className="modern-ticket-image">
        <img src={event.image} alt={event.name} />

        <div className="gradient-overlay" />

        <div className="ticket-price">
          <BadgeIndianRupee size={16} />
          {event.price === 0 ? "Free" : `₹${event.price}`}
        </div>

        <div className="ticket-time">
          <Hourglass size={14} />
          {timeLeft}
        </div>
      </div>

      <div className="modern-ticket-body">
        <div className="ticket-header">
          <h2>{event.name}</h2>
          <span className={`seat-badge ${seatsLeft < 20 ? "low" : ""}`}>
            <Target size={14} />
            {seatsLeft} left
          </span>
        </div>

        <p className="ticket-desc">{event.description}</p>

        <div className="ticket-details">
          <span>
            <CalendarDays size={16} />
            {new Date(event.date).toLocaleDateString()}
          </span>

          <span>
            <MapPin size={16} />
            {event.location}
          </span>
        </div>

        <div className="ticket-footer">
          <button className="primary-btn">View Ticket</button>
          {event.refund && (
            <button className="ghost-btn">Refund</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisteredEventCard;
