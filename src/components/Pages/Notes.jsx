// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";

// const Notes = () => {
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [subscription, setSubscription] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const class11Subjects = [
//     {
//       id: 1,
//       name: "Chemistry",
//       chapters: [
//         { id: 1, title: "Some Basic Concepts of Chemistry", url: "#" },
//         { id: 2, title: "Structure of Atom", url: "#" },
//         { id: 3, title: "Classification of Elements", url: "#" },
//         { id: 4, title: "Chemical Bonding and Molecular Structure", url: "#" },
//         { id: 5, title: "States of Matter", url: "#" },
//         { id: 6, title: "Thermodynamics", url: "#" },
//         { id: 7, title: "Equilibrium", url: "#" },
//         { id: 8, title: "Redox Reactions", url: "#" },
//         { id: 9, title: "Hydrogen", url: "#" },
//         { id: 10, title: "s-Block Elements", url: "#" },
//         { id: 11, title: "Organic Chemistry", url: "#" },
//         { id: 12, title: "Environmental Chemistry", url: "#" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Physics",
//       chapters: [
//         { id: 1, title: "Physical World", url: "#" },
//         { id: 2, title: "Units and Measurements", url: "#" },
//         { id: 3, title: "Motion in a Straight Line", url: "#" },
//         { id: 4, title: "Motion in a Plane", url: "#" },
//         { id: 5, title: "Laws of Motion", url: "#" },
//         { id: 6, title: "Work, Energy and Power", url: "#" },
//         { id: 7, title: "System of Particles and Rotational Motion", url: "#" },
//         { id: 8, title: "Gravitation", url: "#" },
//         { id: 9, title: "Mechanical Properties of Solids", url: "#" },
//         { id: 10, title: "Mechanical Properties of Fluids", url: "#" },
//         { id: 11, title: "Thermal Properties of Matter", url: "#" },
//         { id: 12, title: "Thermodynamics", url: "#" },
//         { id: 13, title: "Kinetic Theory", url: "#" },
//         { id: 14, title: "Oscillations", url: "#" },
//         { id: 15, title: "Waves", url: "#" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Mathematics",
//       chapters: [
//         { id: 1, title: "Sets", url: "#" },
//         { id: 2, title: "Relations and Functions", url: "#" },
//         { id: 3, title: "Trigonometric Functions", url: "#" },
//         { id: 4, title: "Principle of Mathematical Induction", url: "#" },
//         { id: 5, title: "Complex Numbers and Quadratic Equations", url: "#" },
//         { id: 6, title: "Linear Inequalities", url: "#" },
//         { id: 7, title: "Permutations and Combinations", url: "#" },
//         { id: 8, title: "Binomial Theorem", url: "#" },
//         { id: 9, title: "Sequences and Series", url: "#" },
//         { id: 10, title: "Straight Lines", url: "#" },
//         { id: 11, title: "Conic Sections", url: "#" },
//         {
//           id: 12,
//           title: "Introduction to Three-dimensional Geometry",
//           url: "#",
//         },
//         { id: 13, title: "Limits and Derivatives", url: "#" },
//         { id: 14, title: "Mathematical Reasoning", url: "#" },
//         { id: 15, title: "Statistics", url: "#" },
//         { id: 16, title: "Probability", url: "#" },
//       ],
//     },
//   ];

//   const class12Subjects = [
//     {
//       id: 1,
//       name: "Chemistry",
//       chapters: [
//         { id: 1, title: "Solid State", url: "#" },
//         { id: 2, title: "Solutions", url: "#" },
//         { id: 3, title: "Electrochemistry", url: "#" },
//         { id: 4, title: "Chemical Kinetics", url: "#" },
//         { id: 5, title: "Surface Chemistry", url: "#" },
//         {
//           id: 6,
//           title: "General Principles and Processes of Isolation of Elements",
//           url: "#",
//         },
//         { id: 7, title: "p-Block Elements", url: "#" },
//         { id: 8, title: "d and f Block Elements", url: "#" },
//         { id: 9, title: "Coordination Compounds", url: "#" },
//         { id: 10, title: "Haloalkanes and Haloarenes", url: "#" },
//         { id: 11, title: "Alcohols, Phenols and Ethers", url: "#" },
//         { id: 12, title: "Aldehydes, Ketones and Carboxylic Acids", url: "#" },
//         { id: 13, title: "Amines", url: "#" },
//         { id: 14, title: "Biomolecules", url: "#" },
//         { id: 15, title: "Polymers", url: "#" },
//         { id: 16, title: "Chemistry in Everyday Life", url: "#" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Physics",
//       chapters: [
//         { id: 1, title: "Electric Charges and Fields", url: "#" },
//         { id: 2, title: "Electrostatic Potential and Capacitance", url: "#" },
//         { id: 3, title: "Current Electricity", url: "#" },
//         { id: 4, title: "Moving Charges and Magnetism", url: "#" },
//         { id: 5, title: "Magnetism and Matter", url: "#" },
//         { id: 6, title: "Electromagnetic Induction", url: "#" },
//         { id: 7, title: "Alternating Current", url: "#" },
//         { id: 8, title: "Electromagnetic Waves", url: "#" },
//         { id: 9, title: "Ray Optics and Optical Instruments", url: "#" },
//         { id: 10, title: "Wave Optics", url: "#" },
//         { id: 11, title: "Dual Nature of Radiation and Matter", url: "#" },
//         { id: 12, title: "Atoms", url: "#" },
//         { id: 13, title: "Nuclei", url: "#" },
//         { id: 14, title: "Semiconductor Electronics", url: "#" },
//         { id: 15, title: "Communication Systems", url: "#" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Mathematics",
//       chapters: [
//         { id: 1, title: "Relations and Functions", url: "#" },
//         { id: 2, title: "Inverse Trigonometric Functions", url: "#" },
//         { id: 3, title: "Matrices", url: "#" },
//         { id: 4, title: "Determinants", url: "#" },
//         { id: 5, title: "Continuity and Differentiability", url: "#" },
//         { id: 6, title: "Applications of Derivatives", url: "#" },
//         { id: 7, title: "Integrals", url: "#" },
//         { id: 8, title: "Applications of Integrals", url: "#" },
//         { id: 9, title: "Differential Equations", url: "#" },
//         { id: 10, title: "Vector Algebra", url: "#" },
//         { id: 11, title: "Three Dimensional Geometry", url: "#" },
//         { id: 12, title: "Linear Programming", url: "#" },
//         { id: 13, title: "Probability", url: "#" },
//       ],
//     },

//   ];

//   useEffect(() => {
//     const checkSubscription = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "https://noto-server-80j5.onrender.com/api/subscription/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (response.data.membership_type === "Free") {
//           navigate("/subscription");
//           return;
//         }

//         setSubscription(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error:", error);
//         navigate("/login");
//       }
//     };

//     checkSubscription();
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-blue-600 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-white mb-4">Study Notes</h1>
//           <p className="text-white max-w-2xl mx-auto">
//             Access comprehensive study materials for your academic excellence
//           </p>
//         </div>

//         {/* Search and Class Selection */}
//         <div className="mb-12">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => setSelectedClass("11")}
//                 className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//                   selectedClass === "11"
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "bg-white text-gray-700 hover:bg-blue-50"
//                 }`}
//               >
//                 Class 11
//               </button>
//               <button
//                 onClick={() => setSelectedClass("12")}
//                 className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//                   selectedClass === "12"
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "bg-white text-gray-700 hover:bg-blue-50"
//                 }`}
//               >
//                 Class 12
//               </button>
//             </div>
//             <div className="relative w-full md:w-64">
//               <input
//                 type="text"
//                 placeholder="Search chapters..."
//                 className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Subject Grid */}
//         <AnimatePresence mode="wait">
//           {selectedClass && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {(selectedClass === "11" ? class11Subjects : class12Subjects)
//                 .filter((subject) =>
//                   subject.chapters.some((chapter) =>
//                     chapter.title
//                       .toLowerCase()
//                       .includes(searchTerm.toLowerCase())
//                   )
//                 )
//                 .map((subject) => (
//                   <motion.div
//                     key={subject.id}
//                     whileHover={{ y: -5 }}
//                     className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
//                   >
//                     <div className="p-6">
//                       <div className="flex items-center mb-4">
//                         <span className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
//                           <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                             />
//                           </svg>
//                         </span>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           {subject.name}
//                         </h3>
//                       </div>
//                       <div className="space-y-3">
//                         {subject.chapters
//                           .filter((chapter) =>
//                             chapter.title
//                               .toLowerCase()
//                               .includes(searchTerm.toLowerCase())
//                           )
//                           .map((chapter) => (
//                             <div
//                               key={chapter.id}
//                               className="p-3 rounded-lg hover:bg-blue-50 transition-colors"
//                             >
//                               <a
//                                 href={chapter.url}
//                                 className="flex items-center text-gray-700 hover:text-blue-600"
//                               >
//                                 <svg
//                                   className="w-5 h-5 mr-3"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                                   />
//                                 </svg>
//                                 <span className="font-medium">
//                                   {chapter.title}
//                                 </span>
//                               </a>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// // export default Notes;
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";

// const PDFViewer = ({ url, onClose }) => {
//   const modalRef = useRef();

//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div ref={modalRef} className="w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//         >
//           ✕
//         </button>
//         <iframe
//           src={`/PDFFiles/${url}`}
//           className="w-full h-full"
//           title="PDF Viewer"
//         />
//       </div>
//     </div>
//   );
// };

// const Notes = () => {
//   const [selectedClass, setSelectedClass] = useState("11");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [subscription, setSubscription] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const navigate = useNavigate();

//   const class11Subjects = [
//     {
//       id: 1,
//       name: "Chemistry",
//       icon: "🧪",
//       chapters: [
//         { id: 1, title: "Some Basic Concepts of Chemistry", url: "class11chem1.pdf" },
//         { id: 2, title: "Structure of Atom", url: "class11chem2.pdf" },
//         { id: 3, title: "Classification of Elements", url: "class11chem3.pdf" },
//         { id: 4, title: "Chemical Bonding", url: "class11chem4.pdf" }
//       ]
//     },
//     {
//       id: 2,
//       name: "Physics",
//       icon: "⚡",
//       chapters: [
//         { id: 1, title: "Physical World", url: "class11phy1.pdf" },
//         { id: 2, title: "Units and Measurements", url: "class11phy2.pdf" },
//         { id: 3, title: "Motion in a Straight Line", url: "class11phy3.pdf" }
//       ]
//     }
//   ];

//   const class12Subjects = [
//     {
//       id: 1,
//       name: "Chemistry",
//       icon: "🧪",
//       chapters: [
//         { id: 1, title: "Solid State", url: "Class 12 Chapter 1.pdf" },
//         { id: 2, title: "Solutions", url: "class12chem2.pdf" },
//         { id: 3, title: "Electrochemistry", url: "class12chem3.pdf" }
//       ]
//     },
//     {
//       id: 2,
//       name: "Physics",
//       icon: "⚡",
//       chapters: [
//         { id: 1, title: "Electric Charges", url: "class12phy1.pdf" },
//         { id: 2, title: "Electrostatic Potential", url: "class12phy2.pdf" },
//         { id: 3, title: "Current Electricity", url: "class12phy3.pdf" }
//       ]
//     }
//   ];

//   useEffect(() => {
//     const fetchSubscription = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get("https://noto-server-80j5.onrender.com/api/subscription/", {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setSubscription(response.data);
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("Error fetching subscription");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubscription();
//   }, [navigate]);

//   const handleChapterClick = (chapter) => {
//     if (!subscription || subscription.membership_type === "Free") {
//       toast.error("Please upgrade to access premium content");
//       navigate("/subscription");
//       return;
//     }
//     setSelectedPDF(chapter.url);
//   };

//   const filteredSubjects = (selectedClass === "11" ? class11Subjects : class12Subjects)
//     .map(subject => ({
//       ...subject,
//       chapters: subject.chapters.filter(chapter =>
//         chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }))
//     .filter(subject => subject.chapters.length > 0);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 px-4">
//       {selectedPDF && <PDFViewer url={selectedPDF} onClose={() => setSelectedPDF(null)} />}

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-white mb-4">Study Notes</h1>
//           <p className="text-xl text-blue-200">Access comprehensive study materials</p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
//           <div className="flex space-x-4">
//             {["11", "12"].map((classNum) => (
//               <button
//                 key={classNum}
//                 onClick={() => setSelectedClass(classNum)}
//                 className={`px-6 py-2 rounded-lg font-semibold ${
//                   selectedClass === classNum
//                     ? "bg-blue-600 text-white"
//                     : "bg-white bg-opacity-10 text-blue-200 hover:bg-opacity-20"
//                 }`}
//               >
//                 Class {classNum}
//               </button>
//             ))}
//           </div>
//           <input
//             type="text"
//             placeholder="Search chapters..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full sm:w-64 px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-blue-200"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredSubjects.map((subject) => (
//             <div
//               key={subject.id}
//               className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6"
//             >
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mr-3">{subject.icon}</span>
//                 <h3 className="text-xl font-bold text-white">{subject.name}</h3>
//               </div>
//               <ul className="space-y-2">
//                 {subject.chapters.map((chapter) => (
//                   <li key={chapter.id}>
//                     <button
//                       onClick={() => handleChapterClick(chapter)}
//                       className="text-blue-200 hover:text-white transition-colors duration-200 text-left w-full py-2"
//                     >
//                       {chapter.title}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notes;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FaLock, FaSearch, FaBook, FaFileAlt } from "react-icons/fa";

// const PDFViewer = ({ url, onClose }) => {
//   const modalRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div
//         ref={modalRef}
//         className="w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//         >
//           ✕
//         </button>
//         <iframe
//           src={`/PDFFiles/${url}`}
//           className="w-full h-full"
//           title="PDF Viewer"
//         />
//       </div>
//     </div>
//   );
// };

// const Notes = () => {
//   const [selectedClass, setSelectedClass] = useState("11");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [subscription, setSubscription] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [hasReadFreePaper, setHasReadFreePaper] = useState(false);
//   const navigate = useNavigate();

//   const class11Notes = [
//     {
//       id: 1,
//       name: "Chemistry",
//       icon: "🧪",
//       chapters: [
//         { id: 1, title: "Some Basic Concepts", url: "class11chem1.pdf" },
//         { id: 2, title: "Structure of Atom", url: "class11chem2.pdf" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Physics",
//       icon: "⚡",
//       chapters: [
//         { id: 1, title: "Physical World", url: "class11phy1.pdf" },
//         { id: 2, title: "Units and Measurements", url: "class11phy2.pdf" },
//       ],
//     },
//   ];

//   const class12Notes = [
//     {
//       id: 1,
//       name: "Chemistry",
//       icon: "🧪",
//       chapters: [
//         { id: 1, title: "Solid State", url: "class12chem1.pdf" },
//         { id: 2, title: "Solutions", url: "class12chem2.pdf" },
//       ],
//     },
//   ];

//   const samplePapers = {
//     11: [
//       {
//         id: 1,
//         subject: "Chemistry",
//         papers: [
//           {
//             id: 1,
//             title: "Free Sample Paper 1",
//             url: "Sample Paper 1 Class 11.pdf",
//             isFree: true,
//           },
//           { id: 2, title: "Premium Paper 1", url: "class11chem_p1.pdf" },
//         ],
//       },
//     ],
//     12: [
//       {
//         id: 1,
//         subject: "Chemistry",
//         papers: [
//           {
//             id: 1,
//             title: "Free Sample Paper",
//             url: "Sample Paper 1 Class 12.pdf",
//             isFree: true,
//           },
//           { id: 2, title: "Premium Paper 1", url: "class12chem_p1.pdf" },
//         ],
//       },
//     ],
//   };

//   useEffect(() => {
//     const fetchSubscription = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "https://noto-server-80j5.onrender.com/api/subscription/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setSubscription(response.data);
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("Error fetching subscription");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubscription();
//   }, [navigate]);

//   const handleResourceClick = (resource, type) => {
//     if (
//       type === "notes" &&
//       (!subscription || subscription.membership_type === "Free")
//     ) {
//       toast.error("Please subscribe to access study notes");
//       navigate("/subscription");
//       return;
//     }

//     if (type === "paper") {
//       if (!subscription || subscription.membership_type === "Free") {
//         if (!resource.isFree) {
//           toast.error("Please subscribe to access premium papers");
//           navigate("/subscription");
//           return;
//         }
//         if (hasReadFreePaper && !resource.isFree) {
//           toast.error("You've already accessed your free sample paper");
//           return;
//         }
//         setHasReadFreePaper(true);
//       }
//     }
//     setSelectedPDF(resource.url);
//   };

//   const filteredNotes = (selectedClass === "11" ? class11Notes : class12Notes)
//     .map((subject) => ({
//       ...subject,
//       chapters: subject.chapters.filter((chapter) =>
//         chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     }))
//     .filter((subject) => subject.chapters.length > 0);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 px-4">
//       {selectedPDF && (
//         <PDFViewer url={selectedPDF} onClose={() => setSelectedPDF(null)} />
//       )}

//       <div className="max-w-7xl mx-auto space-y-12">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Study Resources
//           </h1>
//           <p className="text-xl text-blue-200">
//             Access comprehensive study materials
//           </p>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex space-x-4">
//             {["11", "12"].map((classNum) => (
//               <button
//                 key={classNum}
//                 onClick={() => setSelectedClass(classNum)}
//                 className={`px-6 py-2 rounded-lg font-semibold ${
//                   selectedClass === classNum
//                     ? "bg-blue-600 text-white"
//                     : "bg-white bg-opacity-10 text-blue-200"
//                 }`}
//               >
//                 Class {classNum}
//               </button>
//             ))}
//           </div>

//           <div className="relative">
//             <FaSearch className="absolute left-3 top-3 text-blue-200" />
//             <input
//               type="text"
//               placeholder="Search resources..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-blue-200 w-64"
//             />
//           </div>
//         </div>

//         {/* Notes Section */}
//         <section className="space-y-6">
//           <h2 className="text-2xl font-bold text-white flex items-center">
//             <FaBook className="mr-2" /> Study Notes
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredNotes.map((subject) => (
//               <div
//                 key={subject.id}
//                 className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6"
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="text-3xl mr-3">{subject.icon}</span>
//                   <h3 className="text-xl font-bold text-white">
//                     {subject.name}
//                   </h3>
//                 </div>
//                 <ul className="space-y-2">
//                   {subject.chapters.map((chapter) => (
//                     <li key={chapter.id}>
//                       <button
//                         onClick={() => handleResourceClick(chapter, "notes")}
//                         className="text-blue-200 hover:text-white transition-colors duration-200 text-left w-full py-2 flex items-center justify-between"
//                       >
//                         <span>{chapter.title}</span>
//                         {(!subscription ||
//                           subscription.membership_type === "Free") && (
//                           <FaLock className="text-yellow-500" />
//                         )}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Sample Papers Section */}
//         <section className="space-y-6">
//           <h2 className="text-2xl font-bold text-white flex items-center">
//             <FaFileAlt className="mr-2" /> Sample Papers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {samplePapers[selectedClass].map((subject) => (
//               <div
//                 key={subject.id}
//                 className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6"
//               >
//                 <h3 className="text-xl font-bold text-white mb-4">
//                   {subject.subject}
//                 </h3>
//                 <ul className="space-y-2">
//                   {subject.papers.map((paper) => (
//                     <li key={paper.id}>
//                       <button
//                         onClick={() => handleResourceClick(paper, "paper")}
//                         className="text-blue-200 hover:text-white transition-colors duration-200 text-left w-full py-2 flex items-center justify-between"
//                       >
//                         <span>{paper.title}</span>
//                         {(!subscription ||
//                           subscription.membership_type === "Free") &&
//                           !paper.isFree && (
//                             <FaLock className="text-yellow-500" />
//                           )}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Notes;


import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLock, FaSearch, FaBook, FaFileAlt, FaTimes } from "react-icons/fa";

const PDFViewer = ({ url, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const openInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden relative"
      >
        <div className="absolute top-2 right-2 z-10 flex gap-2">
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
            title="Close"
          >
            <FaTimes />
          </button>
        </div>
        <iframe
          src={url}
          className="w-full h-full"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

const Notes = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("11");
  const [loading, setLoading] = useState(false);

  const class11Notes = [
    {
      id: 1,
      name: "Physics",
      icon: "⚡",
      chapters: [
        { id: 1, title: "Physical World", url: "/pdfs/class11phy1.pdf" },
        { id: 2, title: "Units and Measurements", url: "/pdfs/class11phy2.pdf" },
      ],
    },
    {
      id: 2,
      name: "Chemistry",
      icon: "🧪",
      chapters: [
        { id: 1, title: "Some Basic Concepts", url: "/pdfs/class11chem1.pdf" },
        { id: 2, title: "Structure of Atom", url: "/pdfs/class11chem2.pdf" },
      ],
    },
  ];

  const class12Notes = [
    {
      id: 1,
      name: "Chemistry",
      icon: "🧪",
      chapters: [
        { id: 1, title: "Solid State", url: "/pdfs/class12chem1.pdf" },
        { id: 2, title: "Solutions", url: "/pdfs/class12chem2.pdf" },
      ],
    },
    {
      id: 2,
      name: "Physics",
      icon: "⚡",
      chapters: [
        { id: 1, title: "Electric Charges", url: "/pdfs/class12phy1.pdf" },
        { id: 2, title: "Electrostatic Potential", url: "/pdfs/class12phy2.pdf" },
      ],
    },
  ];

  const handlePDFClick = async (url) => {
    try {
      setLoading(true);
      // Check user subscription here
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-subscription`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.isSubscribed) {
        setSelectedPDF(url);
      } else {
        toast.error("Please subscribe to access premium content");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error accessing content");
    } finally {
      setLoading(false);
    }
  };

  const filteredNotes = (selectedClass === "11" ? class11Notes : class12Notes)
    .filter(subject =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.chapters.some(chapter =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg pl-10"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedClass("11")}
              className={`px-6 py-2 rounded-lg ${
                selectedClass === "11"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Class 11
            </button>
            <button
              onClick={() => setSelectedClass("12")}
              className={`px-6 py-2 rounded-lg ${
                selectedClass === "12"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Class 12
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((subject) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{subject.icon}</span>
                <h3 className="text-xl font-bold text-white">{subject.name}</h3>
              </div>
              <div className="space-y-3">
                {subject.chapters.map((chapter) => (
                  <motion.div
                    key={chapter.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-700 rounded-lg cursor-pointer"
                  >
                    <div
                      onClick={() => handlePDFClick(chapter.url)}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-200">{chapter.title}</span>
                      <FaBook className="text-blue-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPDF && (
            <PDFViewer url={selectedPDF} onClose={() => setSelectedPDF(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Notes;