import "./heroSectionStyles.css";
import * as HeroSectionData from '../../datas/homePageData'

const HeroSection = () => {

    const HeroText = HeroSectionData.HeroSection;
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-tag">
          {HeroText.tag}
        </span>

        <h1>
          {HeroText.titleTop}<br />
          <span>{HeroText.titleHighlight}</span>
        </h1>

        <p>
          {HeroText.desc}
        </p>
      </div>
    </section>
  );
}
export default HeroSection;