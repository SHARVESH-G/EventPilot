import { Eye, Flag, UserRoundCheck } from "lucide-react"

const appName = import.meta.env.VITE_APP_NAME;

export const aboutHero = {
  title: `About ${appName}`,
  description:
    `${appName} is your all-in-one platform to discover, book, and experience amazing events. From tech conferences to music festivals, we connect people with unforgettable moments.`,
};

export const aboutCards = [
  {
    icon :<Flag style={{color:"var(--primary)"}}  />,
    title: "Our Mission",
    description:
      "To simplify event discovery and make it easier for people to find experiences they love while helping organizers reach the right audience.",
  },
  {
    icon:<Eye style={{color:"var(--primary)"}}  />,
    title: "Our Vision",
    description:
      "We aim to become the go-to global platform for event management, bringing communities together through technology.",
  },
  {
    icon:<UserRoundCheck style={{color:"var(--primary)"}} />,
    title: "Why Choose Us?",
    description:
      "Smart recommendations, seamless booking, secure payments, and a modern interface — everything designed to enhance your event experience.",
  },
];

export const aboutStats = [
  { value: "10K+", label: "Events Hosted" },
  { value: "50K+", label: "Happy Users" },
  { value: "100+", label: "Cities Covered" },
  { value: "4.9", label: "User Rating" },
];
