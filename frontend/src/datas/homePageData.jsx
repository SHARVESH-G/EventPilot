import { Search, CreditCard, Ticket } from "lucide-react";


const appName = import.meta.env.VITE_APP_NAME;

const HowItWorksSteps = [
  {
    id: 1,
    icon: <Search size={28} />,
    title: "Discover",
    desc: "Browse through thousands of events by category, location, or date to find exactly what you love.",
  },
  {
    id: 2,
    icon: <CreditCard size={28} />,
    title: "Book",
    desc: "Secure your spot instantly with our safe payment system. Receive digital tickets directly to your email.",
  },
  {
    id: 3,
    icon: <Ticket size={28} />,
    title: "Enjoy",
    desc: "Show your QR code at the door and get ready for an unforgettable experience with friends.",
  },
];


const HowItWorksTitle = `How ${appName} Works`;

const HowItWorksSubtitle = "Simple, seamless, and secure. We make finding and booking your next adventure effortless.";

const HeroSection = {
  tag: "The #1 Platform for Live Experiences",
  titleTop: "Discover Events",
  titleHighlight: "That Move You",
  desc:
    "From underground music gigs to tech conferences, find the perfect experience to create unforgettable memories.",
};


export {HowItWorksSteps, HowItWorksTitle, HowItWorksSubtitle , HeroSection};