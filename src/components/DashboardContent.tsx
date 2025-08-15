import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Download } from "lucide-react";
import { useState } from "react";

export function DashboardContent() {
  const [viewingDocument, setViewingDocument] = useState<string | null>(null);

  const handleViewDocument = (docId: string) => {
    if (["apaar", "aadhaar", "class10", "class12"].includes(docId)) {
      setViewingDocument(docId);
    }
  };

  const handleDownloadPDF = (docId: string) => {
    if (["apaar", "aadhaar", "class10", "class12"].includes(docId)) {
      // Create a blob with placeholder PDF content
      const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj
4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(${docId.toUpperCase()} Document) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000120 00000 n 
0000000220 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
320
%%EOF`;
      
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${docId}_document.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
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
                  <div className="flex gap-1">
                    {["apaar", "aadhaar", "class10", "class12"].includes(doc.id) && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-6 h-6"
                        onClick={() => handleDownloadPDF(doc.id)}
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-6 h-6"
                      onClick={() => handleViewDocument(doc.id)}
                      title="View Document"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
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

      {/* Document Viewer Modal */}
      {viewingDocument && ["apaar", "aadhaar", "class10", "class12"].includes(viewingDocument) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {issuedDocuments.find(d => d.id === viewingDocument)?.name}
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setViewingDocument(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">
                  {issuedDocuments.find(d => d.id === viewingDocument)?.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {issuedDocuments.find(d => d.id === viewingDocument)?.name}
                </h4>
                <p className="text-gray-600 mb-4">
                  Interactive document view for {viewingDocument.toUpperCase()}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  This is a placeholder for the actual document content with photos and details.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button 
                    onClick={() => handleDownloadPDF(viewingDocument)}
                    className="bg-government-blue hover:bg-government-blue/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setViewingDocument(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}