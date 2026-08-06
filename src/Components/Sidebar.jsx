import React from "react";
import logo from "../assets/images/NTF_logo_black.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const Sidebar = ({
  mobileOpen,
  setMobileOpen,
  collapsed,
  setCollapsed,
  activeMenu,
  setActiveMenu,
}) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <DashboardOutlinedIcon size={20} />,
      path: "/dashboard",
    },
    {
      name: "Attendance",
      icon: <GroupOutlinedIcon size={20} />,
      path: "/attendance",
    },
    {
      name: "Report Management",
      icon: <ImportContactsIcon size={20} />,
    },
    {
      name: "Requirement",
      icon: <AssignmentOutlinedIcon size={20} />,
      path: "/requirement",
    },
  ];

  return (
    <>
      {mobileOpen && !collapsed && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => {
            setCollapsed(true);
            setMobileOpen(false);
          }}
        />
      )}

      <aside
        className={`
          relative lg:relative
          top-0 left-0
          z-50
          h-screen
          bg-white
          border-r border-gray-200
          shadow-lg
          transition-all duration-300
          ${collapsed ? "w-20" : "w-60"}
          translate-x-0
        `}
      >
        <div
          className={`h-16 border-b border-gray-100 flex items-center ${
            collapsed ? "justify-center px-2" : "justify-between px-4"
          }`}
        >
          {!collapsed && (
            <img src={logo} alt="logo" className="h-14 object-contain" />
          )}

          <button
            onClick={() => {
              setCollapsed(!collapsed);
              setMobileOpen(true);
            }}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {collapsed ? <Menu size={22} /> : <X size={22} />}
          </button>
        </div>

        <div className="mt-6 px-3">
          {menuItems.map((item) => {
            const active = activeMenu === item.name;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);

                  if (item.path) {
                    navigate(item.path);
                  }

                  if (window.innerWidth < 1024) {
                    setCollapsed(true);
                  }
                }}
                className={`w-full flex items-center rounded-lg py-3 mb-2 transition-all
                  ${collapsed ? "justify-center" : "justify-start gap-3 px-3"}
                  ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-primary/10 hover:text-primary"
                  }
                `}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-md
                    ${
                      active
                        ? "bg-primary/20"
                        : "bg-gray-100 group-hover:bg-white"
                    }`}
                >
                  {item.icon}
                </div>

                {!collapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
