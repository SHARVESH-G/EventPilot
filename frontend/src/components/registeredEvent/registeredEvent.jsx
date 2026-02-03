import React, { useEffect, useState } from "react";
import "./registeredEvent.css";

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
    <div className="ticket-card">

      <div className="ticket-img">
        <img src={event.image} alt={event.name} />
      </div>

      <div className="ticket-content">

        <div>
          <h3>{event.name}</h3>
          <p>{event.description}</p>

          <div className="ticket-meta">

            <span className="meta-pill price">
              💰 {event.price === 0 ? "Free" : `₹${event.price}`}
            </span>

            <span className={`meta-pill price ${seatsLeft < 20 ? "low" : ""}`}>
              🎯 {seatsLeft} seats left
            </span>

          </div>

          <div className="ticket-countdown">
            ⏳ Starts in <strong>{timeLeft}</strong>
          </div>
        </div>

        <div className="ticket-actions">
          <button className="view-btn">🎟 View Ticket</button>

          {event.refund && (
            <button className="refund-btn">Refund</button>
          )}
        </div>

      </div>
    </div>
  );
};

export default RegisteredEventCard;
