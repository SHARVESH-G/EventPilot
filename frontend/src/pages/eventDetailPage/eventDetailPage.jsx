import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../datas/AAAtemp";
import "./eventDetails.css";

import {
  BadgeIndianRupee,
  MapPin,
  Users,
  CalendarDays,
  Tag,
  Phone,
  Mail,
  Pencil,
  Trash2
} from "lucide-react";

import ParticipantCard from "../../components/participantCard/ParticipantCard";
import TicketCard from "../../components/ticketCard/TicketCard";

const EventDetailsPage = () => {

  const { id } = useParams();
  const currentUser = "admin";

  const event = events.find((e) => e.id === Number(id));

  if (!event) return <h2 style={{ padding: "40px" }}>Event not found</h2>;

  const isCreator = event.createdBy === currentUser;
  const isRegistered = event.registeredUser?.includes(currentUser);

  const participants = event.registeredUser?.length || 0;
  const seatsLeft = event.seats - participants;

  const eventStarted = new Date(event.date) <= new Date();
  const soldOut = seatsLeft <= 0;

  const eventDate = new Date(event.date);

  return (
    <section className="event-details-page">

      <div className="event-hero">
        <img src={event.image} alt={event.name} />

        <div className="event-hero-overlay">
          <span className="category">
            {isCreator ? "Your Event" : event.category}
          </span>

          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </div>
      </div>


      <div className="event-body">

        <div className="event-main">

          <div className="info-grid">

            <div className="info-card">
              <CalendarDays size={20}/>
              <div>
                <h4>Date</h4>
                <p>{eventDate.toLocaleString()}</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={20}/>
              <div>
                <h4>Location</h4>
                <p>{event.location}</p>
              </div>
            </div>

            <div className="info-card">
              <Tag size={20}/>
              <div>
                <h4>Event Type</h4>
                <p>{event.eventType}</p>
              </div>
            </div>

            <div className="info-card">
              <Users size={20}/>
              <div>
                <h4>Seats Left</h4>
                <p>{seatsLeft}</p>
              </div>
            </div>

          </div>


          <div className="about-box">
            <h3>About This Event</h3>
            <p>{event.description}</p>
          </div>


          {isCreator && (
            <div className="participants-wrapper">

              <h3>Participants ({participants})</h3>

              <div className="participants-grid">
                {event.registeredUser?.map((user, index) => (
                  <ParticipantCard
                    key={index}
                    name={user}
                    index={index}
                  />
                ))}
              </div>

            </div>
          )}

        </div>


        <div className="event-sidebar">

          <div className="price-box">

            <h2>
              <BadgeIndianRupee size={22}/>
              {event.price === 0 ? "Free" : `₹${event.price}`}
            </h2>


            {!isRegistered && !eventStarted && !soldOut && (
              <button className="register-btn">
                Register Now
              </button>
            )}


            {isRegistered && event.refund && !eventStarted && (
              <button className="refund-btn">
                Request Refund
              </button>
            )}


            {soldOut && (
              <p className="event-closed">Sold Out</p>
            )}

            {eventStarted && (
              <p className="event-closed">Event Started</p>
            )}


            {isCreator && (
              <div className="creator-actions">
                <button className="delete-btn">
                  <Trash2 size={16}/> Delete Event
                </button>

              </div>
            )}

          </div>


          {isRegistered && (
            <TicketCard
              event={event}
              ticketNumber={
                1000 + event.registeredUser.indexOf(currentUser)
              }
            />
          )}


          <div className="organizer">
            <h3>Organizer</h3>

            <p>
              <Mail size={16}/> {event.adminEamil}
            </p>

            <p>
              <Phone size={16}/> {event.adminContact}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default EventDetailsPage;
