import React from "react";
import "./participantCard.css";
import { User } from "lucide-react";

const ParticipantCard = ({ name, index }) => {
  return (
    <div className="participant-card">
      <div className="avatar">
        <User size={18}/>
      </div>

      <div className="participant-info">
        <h4>{name}</h4>
        <span>Ticket #{1000 + index}</span>
      </div>
    </div>
  );
};

export default ParticipantCard;
