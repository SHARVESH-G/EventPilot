import React from "react";
import "./ticketCard.css";
import { Ticket, CalendarDays, MapPin } from "lucide-react";

const TicketCard = ({ event, ticketNumber }) => {

  const eventDate = new Date(event.date);

  return (
    <div className="ticket-box">

      <div className="ticket-header">
        <Ticket size={20}/>
        <h3>Your Ticket</h3>
      </div>

      <div className="ticket-number">
        #{ticketNumber}
      </div>

      <div className="ticket-event">
        <h2>{event.name}</h2>

        <p>
          <CalendarDays size={16}/>
          {eventDate.toLocaleString()}
        </p>

        <p>
          <MapPin size={16}/>
          {event.location}
        </p>
      </div>

    </div>
  );
};

export default TicketCard;
