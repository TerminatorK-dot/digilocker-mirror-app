import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      isActive: true
    },
    { 
      name: "Become a Partner", 
      href: "/partner" 
    },
    { 
      name: "About Us", 
      href: "/about" 
    },
    { 
      name: "Statistics", 
      href: "/statistics" 
    },
    { 
      name: "Explore DigiLocker", 
      href: "/explore" 
    },
    { 
      name: "FAQ", 
      href: "/faq" 
    },
    { 
      name: "Resources", 
      href: "/resources",
      dropdown: [
        { name: "Credits", href: "/credits" },
        { name: "Circulars", href: "/circulars" },
        { name: "Sitemap", href: "/sitemap" },
        { name: "Certifications", href: "/certifications" },
        { name: "Tender", href: "/tender" }
      ]
    },
    { 
      name: "Terms & Condition of Use", 
      href: "/terms" 
    },
    { 
      name: "DigiLocker Policy", 
      href: "/policy" 
    },
    { 
      name: "MeriPehchaan", 
      href: "/meripehchaan" 
    },
    { 
      name: "DigiLocker Service", 
      href: "/service" 
    },
    { 
      name: "Feedback", 
      href: "/feedback" 
    },
    { 
      name: "Need Help", 
      href: "/help" 
    },
    { 
      name: "Contact", 
      href: "/contact" 
    }
  ];

  return (
    <nav className="bg-muted border-b py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Button
                variant="ghost"
                size="sm"
                className={`text-sm ${
                  item.isActive 
                    ? "text-government-blue font-medium" 
                    : "text-muted-foreground hover:text-government-blue"
                } ${item.dropdown ? "flex items-center gap-1" : ""}`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-3 h-3" />}
              </Button>
              
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg min-w-48 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-government-blue hover:bg-muted transition-colors"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}