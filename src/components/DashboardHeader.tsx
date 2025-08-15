import { Button } from "@/components/ui/button";
import { Menu, Globe, User } from "lucide-react";
import indianFlag from "@/assets/indian-flag.png";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <>
      {/* Top Government Bar */}
      <div className="bg-government-navy text-white text-xs py-1 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={indianFlag} alt="Indian Flag" className="w-5 h-3 object-cover" />
            <span>Government of India</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-government-orange">A+</button>
            <button className="text-white hover:text-government-orange">A</button>
            <button className="text-white hover:text-government-orange">A-</button>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Kartik Thapa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 h-14 flex items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden mr-2"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex-1">
          {/* Header content can be added here if needed */}
        </div>
      </header>
    </>
  );
}