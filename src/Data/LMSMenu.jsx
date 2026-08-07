import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export const lmsMenus = [
  {
    name: "Question Papers",
    icon: <SchoolOutlinedIcon />,
    submenu: [
      { name: "L0", path: "/lms/l0" },
      { name: "L1", path: "/lms/l1" },
      { name: "L2", path: "/lms/l2" },
      { name: "L3", path: "/lms/l3" },
    ],
  },
];
