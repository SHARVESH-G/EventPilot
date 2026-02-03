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
  { _id: 1, name: "Music", icon: <Music/>  , to:""},
  { _id: 2, name: "Arts", icon: <Gamepad2/>  , to:""},
  { _id: 3, name: "Business", icon: <Brush/>  , to:""},
  { _id: 4, name: "Food & Drink", icon: <Medal/>  , to:""},
  { _id: 5, name: "Sports", icon: <Handshake/>  , to:""},
  { _id: 6, name: "Tech", icon: <Cpu/>  , to:""},
];