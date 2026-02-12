import { useState } from "react";
import EventCard from "../eventCard/EventCard";
import { events } from "../../datas/AAAtemp";
import "./trendingEvents.css";

const filters = ["All", "Today", "Tomorrow", "This Weekend"];

const TrendingEvents = () => {
  const [active, setActive] = useState("All");

  const filteredEvents =
    active === "All"
      ? events
      : events.filter((e) => e.filter === active);

  return (
    <section className="trending">
      <div className="trending-header">
        <div>
          <h2>Trending Events</h2>
          <p>Popular events happening near you this week</p>
        </div>

        <div className="toggle">
          {filters.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default TrendingEvents;
