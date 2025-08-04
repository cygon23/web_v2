import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Activity,
  Brain,
  Thermometer,
  Camera,
  BarChart3,
  AlertTriangle,
  CloudRain,
  TrendingUp,
  Leaf,
  Bell,
  Users,
  Brush,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const mainMenu = [
  { label: "Dashboard", icon: Activity, to: "/dashboard" },
  { label: "AI Assistant", icon: Brain, to: "/chatbot" },
  { label: "IoT Sensors", icon: Thermometer, to: "/iot" },
  { label: "Drone Monitoring", icon: Camera, to: "/drone-monitoring" },
  { label: "Analytics", icon: BarChart3, to: "/analytics" },
  { label: "Disease Analysis", icon: AlertTriangle, to: "/disease-analysis" },
  { label: "Weather & Soil", icon: CloudRain, to: "/weather-tips" },
  { label: "Market Prices", icon: TrendingUp, to: "/market" },
  { label: "Input Dealers", icon: Leaf, to: "/dealers" },
  { label: "Reminders", icon: Bell, to: "/reminders" },
  { label: "Support", icon: Users, to: "/support" },
];

const footerMenu = [
  { label: "Profile", icon: Users, to: "/profile" },
  { label: "Customize", icon: Brush, to: "/customize" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "Upgrade", icon: TrendingUp, to: "/pricing" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside
      className={`h-screen bg-white border-r shadow-md fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out 
      ${collapsed ? "w-20" : "w-64"} flex flex-col`}>
      {/* Header */}
      <div className='flex items-center justify-between px-4 py-3 border-b'>
        {!collapsed && (
          <h1 className='text-lg font-bold text-primary'>AgriCareAI</h1>
        )}
        <button
          onClick={toggleSidebar}
          className='text-muted-foreground ml-auto'>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className='flex-1 overflow-y-auto px-2 py-3 space-y-1'>
        {mainMenu.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted/10"
              } ${collapsed ? "justify-center" : "justify-start"}`
            }>
            <Icon className='w-5 h-5' />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer Menu */}
      <div className='border-t px-2 py-3 space-y-1'>
        {footerMenu.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted/10"
              } ${collapsed ? "justify-center" : "justify-start"}`
            }>
            <Icon className='w-5 h-5' />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}

        {/* Logout */}
        <button
          onClick={signOut}
          className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition ${
            collapsed ? "justify-center" : "justify-start"
          }`}>
          <LogOut className='w-5 h-5' />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
