import React from "react";
import HowItWorks from "../../components/howItWorks/howItWorks";
import HeroSection from "../../components/heroSection/heroSection";
import ExploreCategory from "../../components/exploreCategory/exploreCategory";
import Footer from "../../components/footer/footer";
import TrendingEvents from "../../components/trendingEvents/trendingEvents";

const Home = () => {

  return (
    <div>
      <HeroSection/>
      <ExploreCategory/>
      <TrendingEvents/>
      <HowItWorks />
    </div>
  );
};

export default Home;
