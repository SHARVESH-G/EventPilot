import { EventIcons } from "../../datas/eventIcons";
import "./eventCardStyle.css";

const EventCard = ({ event }) => {

  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.name} />

        <span className="event-badge">
          {EventIcons[event.category.toLowerCase()] || EventIcons["other"]}
          <span className="badge-text">{event.category}</span>
        </span>
      </div>

      <div className="event-content">
        <div className="event-date">
          <span className="event-day">{day}</span>
          <span className="event-month">{month}</span>
        </div>

        <div className="event-info">
          <h3>{event.name}</h3>
          <p className="event-location">{event.location}</p>
          <p className="event-desc">{event.description}</p>
        </div>
      </div>

      <div className="event-footer">
        <div className="event-participants">
          {event.seats === 0 ? (
            <span style={{ color: "red" }}>NO SEATS AVAILABLE</span>
          ) : (
            <span style={{ color: "var(--primary)" }}>
              {event.seats} SEATS LEFT
            </span>
          )}
        </div>

        <div className="event-price">
          {event.price === 0 ? (
            <span style={{ color: "green" }}>Free</span>
          ) : (
            `₹${event.price}`
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
