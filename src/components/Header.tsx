import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import indianFlag from "@/assets/indian-flag.png";
import nationalEmblem from "@/assets/national-emblem.png";
import digilockerLogo from "@/assets/digilocker-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "as", name: "অসমীয়া (Assamese)" },
    { code: "bn", name: "বাঙ্গালী (Bengali)" },
    { code: "gu", name: "ગુજરાતી (Gujarati)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "ml", name: "മലയാളം (Malayalam)" },
    { code: "mr", name: "मराठी (Marathi)" },
    { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
    { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "te", name: "తెలుగు (Telugu)" }
  ];

  return (
    <>
      {/* Top Government Bar */}
      <div className="bg-government-navy text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={indianFlag} alt="Indian Flag" className="w-6 h-4 object-cover" />
            <span>Government of India</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-government-orange transition-colors">
              Skip to main content
            </a>
            <div className="flex items-center gap-2">
              <button className="text-white hover:text-government-orange">A+</button>
              <button className="text-white hover:text-government-orange">A</button>
              <button className="text-white hover:text-government-orange">A-</button>
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 text-white hover:text-government-orange transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-foreground border rounded-md shadow-lg min-w-48 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-3 py-2 hover:bg-muted transition-colors"
                      onClick={() => {
                        setIsLanguageOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <img src={nationalEmblem} alt="National Emblem" className="w-12 h-12" />
              <img src={digilockerLogo} alt="DigiLocker" className="h-12" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Button variant="outline" className="border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                Explore DigiLocker
              </Button>
              <Button variant="outline" className="border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                Become a Partner
              </Button>
              <Button className="bg-government-blue hover:bg-government-navy text-white">
                Login / Register
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4 space-y-4">
              <Button variant="outline" className="w-full border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                Explore DigiLocker
              </Button>
              <Button variant="outline" className="w-full border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                Become a Partner
              </Button>
              <Button className="w-full bg-government-blue hover:bg-government-navy text-white">
                Login / Register
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}