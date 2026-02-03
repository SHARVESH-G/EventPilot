import React from "react";
import { events } from "../../datas/AAAtemp";
import RegisteredEventCard from "../../components/registeredEvent/registeredEvent";
import "./registeredEventPage.css";
import {Link} from 'react-router-dom'

const RegisteredEventPage = () => {

  const registeredEvents = events.filter(
    (event) => event.registeredUser && event.registeredUser.length > 0
  );

  return (
    <section className="registered-events-page">

      <h2>Your Registered Events</h2>

      <div className="registered-events-grid">
        {registeredEvents.length > 0 ? (
          registeredEvents.map((event) => (
            <Link  key={event.id} to={`/event/${event.id}`} style={{textDecoration:'none'}}><RegisteredEventCard event={event} /></Link>
          ))
        ) : (
          <p className="no-events">You have not registered for any events yet.</p>
        )}
      </div>

    </section>
  );
};

export default RegisteredEventPage;
