import React from "react";
import { events } from "../../datas/AAAtemp";
import UserCreatedEventCard from "../../components/userCreatedEvent/userCreatedEvent";
import "./userCreatedEventPage.css";
import { Link } from "react-router-dom";

const UserCreatedEventPage = () => {

  const currentUser = "admin";

  const myEvents = events.filter(
    (event) => event.createdBy === currentUser
  );

  const handleDelete = (id) => {
    console.log("Delete event:", id);
  };

  return (
    <section className="created-events-page">

      <h2>Your Created Events</h2>

      <div className="created-events-grid">
        {myEvents.length > 0 ? (
          myEvents.map((event) => (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <UserCreatedEventCard
                event={event}
                onDelete={handleDelete}
              />
            </Link>
          ))
        ) : (
          <p className="no-events">
            You haven't created any events yet.
          </p>
        )}
      </div>

    </section>
  );
};

export default UserCreatedEventPage;
