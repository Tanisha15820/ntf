import { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import KPICards from "../Components/KPICards";
import { lmsMenus } from "../Data/LMSMenu";
import Filters from "../Components/Filters";
import QuestionPaperTable from "../Components/QuestionPaperTable";

const kpiData = [
  {
    title: "L0 Pages",
    value: 10,
    color: "blue",
    icon: <PeopleAltOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "L1 Pages",
    value: 3,
    color: "green",
    icon: <PersonOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "L2 Pages",
    value: 6,
    color: "red",
    icon: <GroupsOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "L4 Pages",
    value: "8",
    color: "purple",
    icon: <SignalCellularAltRoundedIcon sx={{ fontSize: 24 }} />,
  },
];

const LMS = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("LMS");

  return (
    <div className="flex h-screen bg-[#F5F7FB] overflow-hidden">
      <Sidebar
        menuItems={lmsMenus}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <Navbar setMobileOpen={setMobileOpen} activeMenu={activeMenu} />
        </div>

        <main className="flex-1 overflow-y-auto px-6 pt-4 pb-6 space-y-5">
          <Filters />

          <KPICards data={kpiData} />

          <QuestionPaperTable />
        </main>
      </div>
    </div>
  );
};

export default LMS;
