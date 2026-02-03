import React, { useEffect, useState } from "react";
import "./userCreatedEvent.css";
import { BadgeIndianRupee, Hourglass, Target, Users } from "lucide-react";

const UserCreatedEventCard = ({ event, onDelete }) => {

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

  const participants = event.registeredUser?.length || 0;
  const seatsLeft = event.seats - participants;

  return (
    <div className="created-ticket-card">

      <div className="created-ticket-img">
        <img src={event.image} alt={event.name} />
      </div>

      <div className="created-ticket-content">

        <div>
          <div className="created-ticket-top">
            <h3>{event.name}</h3>
            <span className="creator-badge">Your Event</span>
          </div>

          <p>{event.description}</p>

          <div className="created-ticket-meta">
            <span className="meta-pill price">
              <BadgeIndianRupee size={18}/> {event.price === 0 ? "Free" : `₹${event.price}`}
            </span>

            <span className={`meta-pill seats ${seatsLeft < 20 ? "low" : ""}`}>
              <Target size={18}/> {seatsLeft} seats left
            </span>

            <span className="meta-pill participants">
              <Users size={18} /> {participants} joined
            </span>
          </div>

          <div className="created-ticket-countdown">
            <Hourglass size={18}/> Starts in <strong>{timeLeft}</strong>
          </div>
        </div>

        <div className="created-ticket-actions">
          <button className="participants-btn">
            Show Participants
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete?.(event.id)}
          >
            Delete Event
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCreatedEventCard;
