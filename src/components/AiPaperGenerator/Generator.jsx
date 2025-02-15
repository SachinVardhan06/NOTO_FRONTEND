import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaBrain, FaSpinner } from "react-icons/fa";
import { generateQuestions as generateQuestionsAPI } from "../../api/api";

const gateSubjects = [
  { id: "cs", name: "Computer Science" },
  { id: "da", name: "Data Analytics" },
];

const csTopics = {
  "Programming & DS": [
    "Arrays",
    "Linked Lists",
    "Trees",
    "Graphs",
    "Dynamic Programming",
  ],
  "Theory of Computation": [
    "Automata",
    "Regular Languages",
    "Context-Free Grammar",
  ],
  "Operating Systems": [
    "Process Management",
    "Memory Management",
    "File Systems",
  ],
  DBMS: ["SQL", "Normalization", "Transaction Processing"],
  "Computer Networks": ["OSI Model", "TCP/IP", "Network Security"],
};

const daTopics = {
  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Neural Networks",
  ],
  "Data Mining": ["Classification", "Clustering", "Association Rules"],
  Statistics: ["Probability", "Hypothesis Testing", "Regression"],
  Python: ["Numpy", "Pandas", "Scikit-learn"],
};

const questionTypes = [
  { id: "mcq", name: "Multiple Choice (1 Mark)", marks: 1 },
  { id: "maq", name: "Multiple Answer (2 Marks)", marks: 2 },
  { id: "nat", name: "Numerical Answer (2 Marks)", marks: 2 },
];

const AIQuestionGenerator = () => {
  const [subject, setSubject] = useState("");
  const [mainTopic, setMainTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [numericalAnswers, setNumericalAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  // Add this with other state variables
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleTopicChange = (main) => {
    setMainTopic(main);
    setSubTopic("");
  };

  const getTopics = () => {
    return subject === "cs" ? csTopics : daTopics;
  };
  const handleOptionSelect = (questionIndex, optionIndex) => {
    const question = questions[questionIndex];
    if (question.type === "mcq") {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: [optionIndex],
      }));
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: prev[questionIndex]
          ? prev[questionIndex].includes(optionIndex)
            ? prev[questionIndex].filter((i) => i !== optionIndex)
            : [...prev[questionIndex], optionIndex]
          : [optionIndex],
      }));
    }
  };

  const handleNumericalAnswer = (index, value) => {
    setNumericalAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const toggleExplanation = (index) => {
    setShowExplanation((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isOptionSelected = (questionIndex, optionIndex) => {
    const selected = selectedAnswers[questionIndex] || [];
    return selected.includes(optionIndex);
  };
  const difficulties = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ];

  const generateQuestions = async () => {
    if (!subject || !mainTopic || !subTopic || !questionType) {
      toast.error("Please fill in all fields");
      return;
    }
  
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please login to generate questions");
      // Optionally redirect to login page
      return;
    }
  
    try {
      setLoading(true);
      toast.loading("Generating questions...", { id: "generating" });
  
      const response = await generateQuestionsAPI({
        subject,
        mainTopic,
        subTopic,
        questionType,
        difficulty,
        count: 5
      });
  
      if (response?.questions?.length > 0) {
        setQuestions(response.questions);
        setSelectedAnswers({});
        setNumericalAnswers({});
        setShowExplanation({});
        toast.success("Questions generated successfully!", { id: "generating" });
      } else {
        throw new Error("No questions received from the server");
      }
    } catch (error) {
      console.error("Question generation error:", error);
      if (error.detail === "Authentication credentials were not provided.") {
        toast.error("Please login again to continue", { id: "generating" });
        // Handle logout or token refresh here
      } else {
        toast.error(
          error.detail || "Failed to generate questions. Please try again.",
          { id: "generating" }
        );
      }
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800">
      <div className="space-y-6">
        {/* Subject Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 text-white"
          >
            <option value="">Select Subject</option>
            {gateSubjects.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        {/* Main Topic Selection */}
        {subject && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Main Topic
            </label>
            <select
              value={mainTopic}
              onChange={(e) => handleTopicChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 text-white"
            >
              <option value="">Select Main Topic</option>
              {Object.keys(getTopics()).map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Sub Topic Selection */}
        {mainTopic && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sub Topic
            </label>
            <select
              value={subTopic}
              onChange={(e) => setSubTopic(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 text-white"
            >
              <option value="">Select Sub Topic</option>
              {getTopics()[mainTopic].map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Question Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Question Type
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 text-white"
          >
            <option value="">Select Question Type</option>
            {questionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={generateQuestions}
          disabled={
            loading || !subject || !mainTopic || !subTopic || !questionType
          }
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            "Generate Questions"
          )}
        </motion.button>
      </div>
      {/* Questions Display */}
      {questions.length > 0 && (
        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">
                  Question {index + 1} •{" "}
                  {question.type === "mcq" ? "1 Mark" : "2 Marks"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    question.type === "mcq"
                      ? "bg-blue-500/20 text-blue-400"
                      : question.type === "maq"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {question.type === "mcq"
                    ? "Multiple Choice"
                    : question.type === "maq"
                    ? "Multiple Answer"
                    : "Numerical Answer"}
                </span>
              </div>

              <p className="text-white mb-4 text-lg">{question.text}</p>

              {question.type !== "nat" ? (
                <div className="space-y-3">
                  {question.options.map((option, optIndex) => (
                    <motion.div
                      key={optIndex}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-gray-600"
                      onClick={() => handleOptionSelect(index, optIndex)}
                    >
                      <input
                        type={question.type === "mcq" ? "radio" : "checkbox"}
                        name={`question-${index}`}
                        checked={isOptionSelected(index, optIndex)}
                        onChange={() => {}}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <label className="text-gray-300 cursor-pointer flex-1">
                        {option.text}
                      </label>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Enter your numerical answer"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 text-white"
                    value={numericalAnswers[index] || ""}
                    onChange={(e) =>
                      handleNumericalAnswer(index, e.target.value)
                    }
                  />
                </div>
              )}

              {showExplanation[index] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30"
                >
                  <h4 className="text-blue-400 font-medium mb-2">
                    Explanation
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {question.explanation}
                  </p>
                </motion.div>
              )}

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => toggleExplanation(index)}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {showExplanation[index] ? "Hide" : "Show"} Explanation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIQuestionGenerator;
