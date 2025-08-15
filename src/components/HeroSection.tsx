import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Users } from "lucide-react";
import digilockerLogo from "@/assets/digilocker-logo.png";

export function HeroSection() {
  const documents = [
    { 
      name: "Aadhaar Card", 
      icon: FileText, 
      description: "Download your Aadhaar Card PDF",
      downloadCount: "2.5M+" 
    },
    { 
      name: "PAN Card", 
      icon: FileText, 
      description: "Download your PAN Card PDF",
      downloadCount: "1.8M+" 
    },
    { 
      name: "Driving License", 
      icon: FileText, 
      description: "Download your Driving License PDF",
      downloadCount: "1.2M+" 
    },
    { 
      name: "Vehicle Registration", 
      icon: FileText, 
      description: "Download your RC PDF",
      downloadCount: "900K+" 
    },
    { 
      name: "10th Marksheet", 
      icon: FileText, 
      description: "Download your Class 10 Marksheet PDF",
      downloadCount: "750K+" 
    },
    { 
      name: "12th Marksheet", 
      icon: FileText, 
      description: "Download your Class 12 Marksheet PDF",
      downloadCount: "650K+" 
    }
  ];

  const stats = [
    { label: "Registered Users", value: "13.9 Cr+", icon: Users },
    { label: "Documents Issued", value: "709 Cr+", icon: FileText },
    { label: "Registered Organizations", value: "3,400+", icon: Shield }
  ];

  return (
    <section className="bg-gradient-to-b from-government-navy to-government-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={digilockerLogo} alt="DigiLocker" className="h-16 filter brightness-0 invert" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Digital Empowerment
            </h1>
            <p className="text-xl text-blue-100">
              DigiLocker aims at 'Digital Empowerment' of the citizen by providing access to authentic digital documents to the citizen's digital document wallet.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-government-orange hover:bg-orange-600 text-white font-semibold"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-government-navy"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-government-orange/20 p-3 rounded-lg">
                    <stat.icon className="w-8 h-8 text-government-orange" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Documents</h2>
            <p className="text-blue-100">Access and download your important documents instantly</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card key={doc.name} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-government-blue/10 p-3 rounded-lg">
                      <doc.icon className="w-6 h-6 text-government-blue" />
                    </div>
                    <span className="text-xs text-government-green font-medium bg-government-green/10 px-2 py-1 rounded">
                      {doc.downloadCount}
                    </span>
                  </div>
                  <h3 className="font-semibold text-government-navy mb-2">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-government-blue hover:bg-government-navy text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}