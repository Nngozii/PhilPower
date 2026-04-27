import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  ClipboardList,
  Trophy,
  Icon,
} from "lucide-react";

const SideBar = () => {
  const MenuItems = [
    { id: "items", label: "Items", icon: Package },
    { id: "sales-log", label: "Sales Log", icon: ShoppingCart },
    { id: "sales-history", label: "Sales History", icon: ClipboardList },
    { id: "leaderboard", label: "LeaderBoard", icon: Trophy },
    { id: "settings", label: "settings", icon: Settings },
  ];
  return (
    <div className="w-64 bg-white w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 border-gray-200 h-screen flex flex-col fixed">
      <div className="border-b p-1 border-gray-200">
        <h1 className="flex m-5 mb-3 text-2xl font-semibold text-gray-900">
          PhilPower.
        </h1>

        <div className="flex m-1 px-2.5 mr-18 ml-18 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
          <p className="text-center">Worker Portal</p>
        </div>
      </div>

      <div className="flex-1 py-6 px-4 flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
          MENU
        </div>

        {MenuItems.map((items) => {
          const Icon = items.icon;
          return (
          <button key={items.id}> 
          <Icon className="text-gray-400 w-6 h-6"/>
          {items.label}
          </button>
          )
        })}

        <div className="border-t p-3 border-gray-200">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
