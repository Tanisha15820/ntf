import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

export const dashboardMenus = [
  {
    name: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    path: "/dashboard",
  },
  {
    name: "Attendance",
    icon: <GroupOutlinedIcon />,
    path: "/attendance",
  },
  {
    name: "Requirement",
    icon: <AssignmentOutlinedIcon />,
    path: "/requirement",
  },
];
