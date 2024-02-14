import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-gray w-fizz">
      <Card className="bg-dark h-screen w-full max-w-[20rem] rounded-none rounded-r-xl p-4 shadow-lg shadow-[#a8a29e]">
        <div className="mb-2 p-4">
          <Typography variant="h5" className="font-ls600 text-light">
            Sample Church
          </Typography>
        </div>
        <List>
          <ListItem
            onClick={() => handleNavigate("/admin")}
            className={`text-light ${location.pathname === "/admin" ? "bg-light text-dark" : ""}`}
          >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem
            onClick={() => handleNavigate("/admin/scheduled-prayers")}
            className={`text-light ${location.pathname === "/admin/scheduled-prayers" ? "bg-light text-dark" : ""}`}
          >
            <ListItemPrefix>
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
            Scheduled Prayers
          </ListItem>
          <ListItem
            onClick={() => handleNavigate("/admin/list")}
            className={`text-light ${location.pathname === "/admin/list" ? "bg-light text-dark" : ""}`}
          >
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5" />
            </ListItemPrefix>
            List
          </ListItem>
          <ListItem className="text-light">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className="text-light">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="text-light">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
