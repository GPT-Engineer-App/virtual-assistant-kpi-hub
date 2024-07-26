import { Home, BarChart2, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Overview",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Performance",
    to: "/performance",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <div>Performance Page</div>,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
];