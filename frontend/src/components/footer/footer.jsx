import { NavBarLinks } from "../../datas/uiData";
import {Link} from "react-router-dom"
import "./footer.css";
import { CategoriesLinks } from "../../datas/eventIcons";

const Footer = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2 className="logo">{appName}</h2>
          <p> 
            Discover amazing events happening around you. From tech meetups to
            music festivals, {appName} helps you find, book, and enjoy
            unforgettable experiences.
          </p>
        </div>


        <div className="footer-section">
          <h4>Quick Links</h4>
          {NavBarLinks.map((link)=>{
            return(
              <Link key={link._id} to={`/${link.to}`}>{link.name}</Link>
            )
          })}
        </div>

        <div className="footer-section">
          <h4>Popular Categories</h4>
          {CategoriesLinks.map((link)=>{
            return(
              <Link key={link._id} to={`/${link.to}`}>{link.name}</Link>
            )
          })}
        </div>

        <div className="footer-section">
          <h4>Stay Updated</h4>
          <p>Subscribe to get updates on trending events.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {appName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
