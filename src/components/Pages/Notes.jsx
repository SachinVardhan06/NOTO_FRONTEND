import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLock, FaSearch, FaBook, FaFileAlt } from "react-icons/fa";

const PDFViewer = ({ url, onClose }) => {
  const modalRef = useRef();

  const openInNewTab = () => {
    window.open(`/PDFFiles/${url}`, '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="w-full max-w-4xl bg-white rounded-lg overflow-hidden relative"
      >
        <div className="flex justify-end gap-2 absolute top-2 right-2 z-10">
          <button
            onClick={openInNewTab}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            title="Open in new tab"
          >
            <FaFileAlt />
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
          >
            ✕
          </button>
        </div>
        <iframe
          src={`/PDFFiles/${url}`}
          className="w-full h-[80vh]"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

const Notes = () => {
  const [selectedClass, setSelectedClass] = useState("11");
  const [searchTerm, setSearchTerm] = useState("");
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [hasReadFreePaper, setHasReadFreePaper] = useState(false);
  const navigate = useNavigate();

  const class11Notes = [
    {
      id: 1,
      name: "Chemistry",
      icon: "🧪",
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
        { id: 1, title: "Solid State", url: "class 12 Chapter 1.pdf" },
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
    12: [
      {
        id: 1,
        subject: "Chemistry",
        papers: [
          {
            id: 1,
            title: "Sample Paper 1",
            url: "SamplePaper1Class12.pdf",
            isFree: true,
          },
          { id: 2, title: "Premium Paper 1", url: "class12chem_p1.pdf" },
        ],
      },
    ],
  };

  useEffect(() => {
    const fetchSubscription = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "https://noto-server-80j5.onrender.com/api/subscription/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSubscription(response.data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error fetching subscription");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [navigate]);

  const handleResourceClick = (resource, type) => {
    if (
      type === "notes" &&
      (!subscription || subscription.membership_type === "Free")
    ) {
      toast.error("Please subscribe to access study notes");
      navigate("/subscription");
      return;
    }

    if (type === "paper") {
      if (!subscription || subscription.membership_type === "Free") {
        if (!resource.isFree) {
          toast.error("Please subscribe to access premium papers");
          navigate("/subscription");
          return;
        }
        if (hasReadFreePaper && !resource.isFree) {
          toast.error("You've already accessed your free sample paper");
          return;
        }
        setHasReadFreePaper(true);
      }
    }
    setSelectedPDF(resource.url);
  };

  const filteredNotes = (selectedClass === "11" ? class11Notes : class12Notes)
    .map((subject) => ({
      ...subject,
      chapters: subject.chapters.filter((chapter) =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((subject) => subject.chapters.length > 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-6 sm:py-12 px-4">
      {selectedPDF && (
        <PDFViewer url={selectedPDF} onClose={() => setSelectedPDF(null)} />
      )}

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
            Study Resources
          </h1>
          <p className="text-lg sm:text-xl text-blue-200">
            Access comprehensive study materials
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex gap-2 sm:gap-4">
            {["11", "12"].map((classNum) => (
              <button
                key={classNum}
                onClick={() => setSelectedClass(classNum)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-lg font-semibold ${
                  selectedClass === classNum
                    ? "bg-blue-600 text-white"
                    : "bg-white bg-opacity-10 text-blue-200"
                }`}
              >
                Class {classNum}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-3 top-3.5 text-blue-200" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-blue-200"
            />
          </div>
        </div>

        {/* Notes Section */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center p-2">
            <FaBook className="mr-2" /> Study Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredNotes.map((subject) => (
              <div
                key={subject.id}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl mr-3">
                    {subject.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {subject.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {subject.chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <button
                        onClick={() => handleResourceClick(chapter, "notes")}
                        className="text-blue-200 hover:text-white transition-colors duration-200 text-left w-full py-2.5 px-3 rounded-lg hover:bg-white hover:bg-opacity-5 flex items-center justify-between"
                      >
                        <span>{chapter.title}</span>
                        {(!subscription ||
                          subscription.membership_type === "Free") && (
                          <FaLock className="text-yellow-500" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Papers Section */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center p-2">
            <FaFileAlt className="mr-2" /> Sample Papers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {samplePapers[selectedClass].map((subject) => (
              <div
                key={subject.id}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {subject.subject}
                </h3>
                <ul className="space-y-2">
                  {subject.papers.map((paper) => (
                    <li key={paper.id}>
                      <button
                        onClick={() => handleResourceClick(paper, "paper")}
                        className="text-blue-200 hover:text-white transition-colors duration-200 text-left w-full py-2.5 px-3 rounded-lg hover:bg-white hover:bg-opacity-5 flex items-center justify-between"
                      >
                        <span>{paper.title}</span>
                        {(!subscription ||
                          subscription.membership_type === "Free") &&
                          !paper.isFree && (
                            <FaLock className="text-yellow-500" />
                          )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notes;