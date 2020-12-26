import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const MenuItems = [
  {
    id: 1,
    icon: <HomeIcon />,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: <NoteAddIcon />,
    name: "Add Memory",
    link: "/add",
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    name: "settings",
    link: "/settings",
  },
];

export default MenuItems;
