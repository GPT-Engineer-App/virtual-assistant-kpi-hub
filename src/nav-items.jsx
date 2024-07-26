import { BarChart2, Users, Briefcase, Settings, Cog } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "KPI",
    to: "/",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Campaigns",
    to: "/campaigns",
    icon: <Briefcase className="h-4 w-4" />,
    page: <div>Campaigns Page</div>,
  },
  {
    title: "User",
    to: "/user",
    icon: <Users className="h-4 w-4" />,
    page: <div>User Page</div>,
  },
  {
    title: "Product",
    to: "/product",
    icon: <Cog className="h-4 w-4" />,
    page: <div>Product Page</div>,
  },
  {
    title: "Product Configuration",
    to: "/product-configuration",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Product Configuration Page</div>,
  },
];