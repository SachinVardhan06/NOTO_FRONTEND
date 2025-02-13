import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import gateQuestions from "./gatequestions";

const GateExam = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [examStarted, setExamStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1 * 60 * 60);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (examStarted && timeLeft === 600) { // Warning at 5 seconds remaining
      toast.warning('10 minutes remaining!');
    }
  }, [timeLeft, examStarted]);

  useEffect(() => {
    try {
      setLoading(true);
      if (!Array.isArray(gateQuestions) || gateQuestions.length === 0) {
        throw new Error("Invalid questions data");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load exam questions");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (examStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && examStarted) {
      submitExam();
    }
  }, [examStarted, timeLeft]);

  useEffect(() => {
    try {
      setLoading(true);
      // Validate and set initial questions
      if (!Array.isArray(gateQuestions) || gateQuestions.length === 0) {
        throw new Error("Invalid questions data");
      }
      setQuestions(shuffleQuestions(gateQuestions, 65));
      setLoading(false);
    } catch (error) {
      console.error("Error loading questions:", error);
      toast.error("Failed to load exam questions");
      setLoading(false);
    }
  }, []);

  const validateNumericalAnswer = (question, userAnswer) => {
    const numAnswer = parseFloat(userAnswer);
    if (isNaN(numAnswer)) return false;
    return Math.abs(numAnswer - question.answer) <= question.tolerance;
  };

  const handleAnswer = (questionId, answer) => {
    const question = questions.find((q) => q.id === questionId);
    if (question.type === "NAT") {
      // Validate numerical input
      if (answer === "" || isNaN(parseFloat(answer))) {
        setAnswers((prev) => {
          const newAnswers = { ...prev };
          delete newAnswers[questionId];
          return newAnswers;
        });
      } else {
        setAnswers((prev) => ({
          ...prev,
          [questionId]: parseFloat(answer),
        }));
      }
    } else {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    }
  };

  const toggleMarkForReview = (questionId) => {
    setMarkedForReview((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };
  const shuffleQuestions = (questions, count) => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    return shuffled.map((q, index) => ({
      ...q,
      id: index + 1, // Ensure each question has a unique ID
    }));
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading Exam...</p>
        </div>
      </div>
    );
  }

  // Instructions View
  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            GATE Exam Instructions
          </h1>
          <div className="space-y-4 text-gray-100">
            <p className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Total Duration: 1 hours
            </p>
            <p className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Total Questions: 20
            </p>
            <p className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Maximum Marks: 20
            </p>
            <p className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Negative Marking: 0.33 marks for wrong answers
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              try {
                setExamStarted(true);
                setShowInstructions(false);
                toast.success("Exam started successfully");
              } catch (error) {
                console.error("Error starting exam:", error);
                toast.error("Failed to start exam");
              }
            }}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Start Exam
          </motion.button>
        </div>
      </div>
    );
  }

  // Update the calculateScore function
  const calculateScore = () => {
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let attemptedCount = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q.id];

      if (userAnswer !== undefined) {
        attemptedCount++;
        if (q.type === "NAT") {
          if (validateNumericalAnswer(q, userAnswer)) {
            totalScore += q.marks;
            correctCount++;
          }
          // No negative marking for NAT questions
        } else {
          if (userAnswer === q.correct) {
            totalScore += q.marks;
            correctCount++;
          } else {
            totalScore -= q.negative;
            incorrectCount++;
          }
        }
      }
    });

    return {
      totalScore: Math.max(0, totalScore),
      attempted: attemptedCount,
      correct: correctCount,
      incorrect: incorrectCount,
    };
  };

  // Update the submitExam function
  const submitExam = () => {
    const results = calculateScore();
    setResult({
      score: results.totalScore,
      totalQuestions: questions.length,
      attempted: results.attempted,
      correct: results.correct,
      incorrect: results.incorrect,
    });
    setExamStarted(false);
    toast.success("Exam submitted successfully!");
  };

  // Update the Results View section
  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Exam Results
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard
              title="Total Score"
              value={`${result.score.toFixed(2)} / 100`}
            />
            <ResultCard
              title="Questions Attempted"
              value={`${result.attempted} of ${result.totalQuestions}`}
            />
            <ResultCard
              title="Correct Answers"
              value={`${result.correct} (${(
                (result.correct / result.totalQuestions) *
                100
              ).toFixed(1)}%)`}
            />
            <ResultCard
              title="Incorrect Answers"
              value={`${result.incorrect} (${(
                (result.incorrect / result.totalQuestions) *
                100
              ).toFixed(1)}%)`}
            />
          </div>
          <div className="mt-8 text-center text-white">
            <p className="text-xl mb-4">
              {result.score >= 40
                ? "🎉 Congratulations! You have passed the exam."
                : "😔 Unfortunately, you did not meet the passing score."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-300"
            >
              Return to Home
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Exam View
  // Update the exam view layout
return (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
    <Toaster position="top-right" />

    {/* Header */}
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md p-4 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">GATE Exam</h1>
        <div className="flex items-center space-x-4">
          <div className="text-xl font-mono text-white">{formatTime(timeLeft)}</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={submitExam}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Submit Exam
          </motion.button>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="container mx-auto pt-20 px-4">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Section - Question Area */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6">
            {questions[currentSection] && (
              <>
                <div className="text-white mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">
                      Question {currentSection + 1}
                    </span>
                    <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                      {questions[currentSection].marks} marks
                    </span>
                  </div>
                  <p className="text-lg">{questions[currentSection].question}</p>
                </div>

                <div className="space-y-4">
                  {questions[currentSection].type === "MCQ" ? (
                    questions[currentSection].options.map((option, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${
                          answers[questions[currentSection].id] === idx
                            ? "bg-blue-600 text-white"
                            : "bg-white bg-opacity-10 text-gray-200 hover:bg-opacity-20"
                        }`}
                        onClick={() => handleAnswer(questions[currentSection].id, idx)}
                      >
                        {option}
                      </motion.div>
                    ))
                  ) : (
                    <div className="mt-4">
                      <input
                        type="number"
                        step="any"
                        value={answers[questions[currentSection].id] || ""}
                        onChange={(e) => handleAnswer(questions[currentSection].id, e.target.value)}
                        className="w-full p-4 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your numerical answer"
                      />
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleMarkForReview(questions[currentSection].id)}
                    className={`px-4 py-2 rounded-lg ${
                      markedForReview.includes(questions[currentSection].id)
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-600 text-white hover:bg-yellow-700"
                    }`}
                  >
                    {markedForReview.includes(questions[currentSection].id)
                      ? "Marked for Review"
                      : "Mark for Review"}
                  </motion.button>
                  <div className="space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentSection((prev) => Math.max(0, prev - 1))}
                      disabled={currentSection === 0}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentSection((prev) => Math.min(questions.length - 1, prev + 1))}
                      disabled={currentSection === questions.length - 1}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      Next
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Section - Summary and Navigation */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Exam Summary */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Exam Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-200">Total Questions:</span>
                <span className="text-white">{questions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">Attempted:</span>
                <span className="text-white">{Object.keys(answers).length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">For Review:</span>
                <span className="text-white">{markedForReview.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">Time Left:</span>
                <span className="text-white font-mono">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Question Navigator</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSection(idx)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold ${
                    answers[questions[idx].id]
                      ? "bg-green-500 text-white"
                      : markedForReview.includes(questions[idx].id)
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-700 text-white"
                  } ${currentSection === idx ? "ring-2 ring-white" : ""}`}
                >
                  {idx + 1}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-200">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-gray-200">Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <span className="text-gray-200">Not Attempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const ResultCard = ({ title, value }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
    <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
    <p className="text-3xl font-bold mt-2 text-white">{value}</p>
  </div>
);

export default GateExam;
