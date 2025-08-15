import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  FileText, 
  Search, 
  HardDrive, 
  Settings, 
  Info, 
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import digilockerLogo from "@/assets/digilocker-logo.png";
import nationalEmblem from "@/assets/national-emblem.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home", active: true },
    { id: "issued", icon: FileText, label: "Issued Documents" },
    { id: "search", icon: Search, label: "Search Documents" },
    { id: "drive", icon: HardDrive, label: "Drive" },
    { id: "services", icon: Settings, label: "DigiLocker Services" },
    { id: "about", icon: Info, label: "About DigiLocker" },
    { id: "umang", icon: ExternalLink, label: "Access UMANG", external: true }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-50 lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "w-64"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={nationalEmblem} alt="National Emblem" className="w-8 h-8" />
              <img src={digilockerLogo} alt="DigiLocker" className="h-8" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                    activeItem === item.id
                      ? "bg-government-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.external && <ExternalLink className="w-4 h-4 ml-auto" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}