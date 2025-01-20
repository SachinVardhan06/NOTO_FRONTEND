import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';

const Notes = ({ user, isLoggedIn }) => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const class11Notes = [
    {
      id: 1,
      name: "Chemistry",
      icon: "⚗️",
      chapters: [
        { id: 1, title: "Some Basic Concepts", url: "class11chem1.pdf" },
        { id: 2, title: "Structure of Atom", url: "class11chem2.pdf" },
      ],
    },
    {
      id: 2,
      name: "Physics",
      icon: "⚡",
      chapters: [
        { id: 1, title: "Physical World", url: "class11phy1.pdf" },
        { id: 2, title: "Units and Measurements", url: "class11phy2.pdf" },
      ],
    },
  ];

  const class12Notes = [
    {
      id: 1,
      name: "Chemistry",
      icon: "🧪",
      chapters: [
        { id: 1, title: "Solid State", url: "Class 12 Chapter 1.pdf" },
        { id: 2, title: "Solutions", url: "class12chem2.pdf" },
      ],
    },
  ];

  const samplePapers = {
    11: [
      {
        id: 1,
        subject: "Chemistry",
        papers: [
          {
            id: 1,
            title: "Sample Paper 1",
            url: "Sample Paper 1 Class 11.pdf",
            isFree: true,
          },
          { id: 2, title: "Premium Paper 1", url: "class11chem_p1.pdf" },
        ],
      },
    ],
    12: [{
      id: 1,
      subject: "Chemistry",
      papers: [
        {
          id: 1,
          title: "Sample Paper 1",
          url: "SamplePaper1Class12.pdf",
          isFree: true,
        },
        { id: 2, title: "Premium Paper 1", url: "class11chem_p1.pdf" },
      ],
    },]
  };

  const handlePDFClick = (url, isFree = false) => {
    if (!isLoggedIn) {
      toast.info("Please login to continue");
      return;
    }

    if (!isFree && (!user?.subscription?.membership_type === "Premium" || !user?.subscription?.membership_type === "Basic")) {
      toast.warning("Premium content requires subscription");
      return;
    }

    // Open PDF in new tab
    window.open(`/pdfs/${url}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-8">Study Materials</h2>
      
      {/* Class 11 Notes */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Class 11</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {class11Notes.map(subject => (
            <div key={subject.id} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                <span className="mr-2">{subject.icon}</span>
                {subject.name}
              </h4>
              <ul className="space-y-3">
                {subject.chapters.map(chapter => (
                  <li 
                    key={chapter.id}
                    className="cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={() => handlePDFClick(chapter.url)}
                  >
                    {chapter.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Papers */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Sample Papers</h3>
        {Object.entries(samplePapers).map(([classNum, subjects]) => (
          <div key={classNum} className="mb-8">
            <h4 className="text-xl mb-4">Class {classNum}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map(subject => (
                <div key={subject.id} className="bg-gray-800 p-6 rounded-lg">
                  <h5 className="font-semibold mb-4">{subject.subject}</h5>
                  <ul className="space-y-3">
                    {subject.papers.map(paper => (
                      <li
                        key={paper.id}
                        className="cursor-pointer hover:text-blue-400 transition-colors"
                        onClick={() => handlePDFClick(paper.url, paper.isFree)}
                      >
                        {paper.title}
                        {paper.isFree && (
                          <span className="ml-2 text-green-400 text-sm">(Free)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;