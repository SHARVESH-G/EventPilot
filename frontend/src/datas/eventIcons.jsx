import { Book, Brush, ChefHat, Cpu, Earth, Gamepad2, Handshake, HeartPulse, Medal, Music } from "lucide-react";

export const EventIcons = {
    music:<Music size={12}/>,
    gaming:<Gamepad2 size={12}/>,
    art:<Brush size={12}/>,
    sports:<Medal size={12}/>,
    business:<Handshake size={12}/>,
    education:<Book size={12}/>,
    tech:<Cpu size={12}/>,
    food:<ChefHat size={12}/>,
    health:<HeartPulse size={12}/>,
    other:<Earth size={12}/>
}


export const CategoriesLinks = [
  { _id: 1, name: "Music", icon: Music },
  { _id: 2, name: "Gaming", icon: Gamepad2 },
  { _id: 3, name: "Art", icon: Brush },
  { _id: 4, name: "Sports", icon: Medal },
  { _id: 5, name: "Business", icon: Handshake },
  { _id: 6, name: "Education", icon: Book },
  { _id: 7, name: "Tech", icon: Cpu },
  { _id: 8, name: "Food", icon: ChefHat },
  { _id: 9, name: "Health", icon: HeartPulse },
  { _id: 10, name: "Other", icon: Earth }
];
