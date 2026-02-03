import "./aboutUs.css";
import { aboutHero, aboutCards, aboutStats } from "../../datas/aboutUsData";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-hero">
          <h1>{aboutHero.title}</h1>
          <p>{aboutHero.description}</p>
        </div>

        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <div key={index} className="about-card">
                <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="about-stats">
          {aboutStats.map((stat, index) => (
            <div key={index}>
              <h2>{stat.value}</h2>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
