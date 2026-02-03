import * as HomePageData from "../../datas/homePageData";
import "./howItWorksStyles.css";


function HowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw-container">
        <h2 className="hiw-title">{HomePageData.HowItWorksTitle}</h2>
        <p className="hiw-sub">
          {HomePageData.HowItWorksSubtitle}
        </p>

        <div className="hiw-steps">
          {HomePageData.HowItWorksSteps.map((step) => (
            <div key={step.id} className="hiw-card">
              <div className="hiw-icon">{step.icon}</div>

              <span className="hiw-number">{step.id}.</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
