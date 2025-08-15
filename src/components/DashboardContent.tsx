import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

export function DashboardContent() {
  const issuedDocuments = [
    {
      id: "apaar",
      name: "APAAR ID",
      number: "804****896",
      issuer: "Academic Bank of Credits",
      icon: "🏛️"
    },
    {
      id: "aadhaar",
      name: "Aadhaar Card",
      number: "************795",
      issuer: "Unique Identification Authority of India...",
      icon: "🔺"
    },
    {
      id: "class10",
      name: "Class X Marksheet",
      number: "165****795",
      issuer: "Central Board of Secondary Education",
      icon: "🎓"
    },
    {
      id: "class12",
      name: "Class XII Marksheet",
      number: "",
      issuer: "Central Board of Secondary Education",
      icon: "🎓"
    }
  ];

  const newDocuments = [
    {
      title: "Central Board of Secondary Education - 2025",
      description: "Marksheets of Class X and XII",
      color: "bg-gradient-to-r from-blue-600 to-blue-700",
      available: true
    },
    {
      title: "Andhra Pradesh Open School Society - 2025",
      description: "SSC and IPE Marksheets",
      color: "bg-gradient-to-r from-purple-600 to-purple-700",
      available: true
    },
    {
      title: "Board of Secondary Education, Rajasthan - 2025",
      description: "Marksheets of Class XII",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      available: true
    },
    {
      title: "The Jammu and Kashmir Board of School Education - 2025",
      description: "Marksheets of Class X and XII",
      color: "bg-gradient-to-r from-purple-700 to-purple-800",
      available: true
    }
  ];

  const suggestedDocuments = [
    { name: "COVID-19", image: "🦠" },
    { name: "Vehicle", image: "🚗" },
    { name: "Passport", image: "📘" },
    { name: "Health", image: "🏥" },
    { name: "Ration Card", image: "🏷️" }
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-government-navy mb-2">Welcome, Kartik Thapa !</h1>
        <p className="text-gray-600">
          DigiLocker 'Issued Documents' are at par with original documents as per IT ACT, 2000
        </p>
      </div>

      {/* Your Issued Documents */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-government-blue">Your Issued Documents</h2>
          <Button variant="link" className="text-government-blue text-sm">
            VIEW ALL (5)
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {issuedDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{doc.icon}</div>
                  <Button variant="ghost" size="icon" className="w-6 h-6">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="font-medium text-government-navy mb-1">{doc.name}</h3>
                {doc.number && (
                  <p className="text-sm text-gray-600 mb-2">{doc.number}</p>
                )}
                <p className="text-xs text-gray-500">{doc.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* New in DigiLocker */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-government-blue mb-4">New in DigiLocker</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newDocuments.map((doc, index) => (
            <Card key={index} className={`${doc.color} text-white overflow-hidden`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-8 h-8 bg-white/30 rounded"></div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-sm leading-tight">{doc.title}</h3>
                <p className="text-xs opacity-90 mb-4">{doc.description}</p>
                <Button 
                  size="sm" 
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  variant="outline"
                >
                  Available Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Document you might need */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-government-blue">Document you might need</h2>
          <Button variant="link" className="text-government-blue text-sm">
            VIEW ALL
            <ExternalLink className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {suggestedDocuments.map((doc, index) => (
            <Card key={index} className="aspect-square hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-2">{doc.image}</div>
                <p className="text-sm font-medium text-center text-government-navy">{doc.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}