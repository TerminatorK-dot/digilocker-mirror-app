import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import digilockerLogo from "@/assets/digilocker-logo.png";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Statistics", href: "/statistics" },
    { name: "Resources", href: "/resources" },
    { name: "Circulars", href: "/circulars" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Explore DigiLocker", href: "/explore" }
  ];

  const legalLinks = [
    { name: "Terms & Condition of Use", href: "/terms" },
    { name: "Need Help", href: "/help" },
    { name: "Feedback", href: "/feedback" },
    { name: "Credits", href: "/credits" },
    { name: "Partners", href: "/partners" },
    { name: "MeriPehchaan", href: "/meripehchaan" },
    { name: "Insights from Our Experts", href: "/insights" },
    { name: "Certifications", href: "/certifications" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/OfficialDigiLocker" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/digilocker_ind" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/officialdigilocker/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/digitallocker/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCHVbXM4OexDUKyGBtdvmfmg" }
  ];

  return (
    <footer className="bg-government-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={digilockerLogo} alt="DigiLocker" className="h-12 filter brightness-0 invert" />
            <p className="text-blue-100 text-sm">
              DigiLocker aims at 'Digital Empowerment' of the citizen by providing access to authentic digital documents.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-lg hover:bg-government-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-government-orange transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-government-orange transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold text-white mb-4">Download App</h3>
            <div className="space-y-3">
              <Button 
                className="w-full bg-white/10 hover:bg-white/20 border-white/20"
                variant="outline"
              >
                Download on App Store
              </Button>
              <Button 
                className="w-full bg-white/10 hover:bg-white/20 border-white/20"
                variant="outline"
              >
                Get it on Google Play
              </Button>
            </div>
            <p className="text-xs text-blue-100 mt-4">
              Last Updated: August 15, 2025
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Powered by</span>
                <span className="font-semibold text-government-orange">DigitalIndiaCorporation</span>
              </div>
              <p className="text-sm text-blue-100">
                Ministry of Electronics & IT (MeitY) | Government of India
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-blue-100">
              <span>Copyright © 2025, Website maintained by National eGovernance Division (NeGD)</span>
              <div className="flex gap-4">
                <a href="/policy" className="hover:text-government-orange transition-colors">
                  DigiLocker Policy
                </a>
                <a href="/contact" className="hover:text-government-orange transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          {/* ISO Certifications */}
          <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/20">
            <div className="bg-white/10 px-4 py-2 rounded text-xs font-medium">
              ISO 27001 Certified
            </div>
            <div className="bg-white/10 px-4 py-2 rounded text-xs font-medium">
              ISO 9001 Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}