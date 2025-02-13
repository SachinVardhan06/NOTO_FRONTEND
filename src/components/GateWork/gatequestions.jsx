const gateQuestions = [
  {
    id: 1,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following sorting algorithms has the lowest worst-case time complexity?",
    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
    correct: 1,
    explanation:
      "Merge Sort has a worst-case time complexity of O(n log n), while Quick Sort has O(n²), and both Bubble and Selection Sort have O(n²).",
    subject: "Algorithms",
  },
  {
    id: 2,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "In a complete binary tree with n internal nodes, the number of leaf nodes is:",
    options: ["n", "n + 1", "2n", "2n + 1"],
    correct: 1,
    explanation:
      "In a complete binary tree, if there are n internal nodes, there will be n + 1 leaf nodes.",
    subject: "Data Structures",
  },
  {
    id: 3,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the time complexity of finding the height of a binary tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 2,
    explanation:
      "Finding the height requires traversing all nodes once, hence O(n).",
    subject: "Data Structures",
  },
  {
    id: 4,
    type: "NAT", // Numerical Answer Type
    marks: 2,
    negative: 0,
    question:
      "If a hash table contains n elements and uses chaining for collision resolution, what is the expected time complexity of searching for an element? (Enter the power of n in the worst case)",
    answer: 1,
    tolerance: 0,
    explanation:
      "With chaining, worst-case search time is O(n) when all elements hash to the same bucket.",
    subject: "Data Structures",
  },
  {
    id: 5,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a valid state of a process?",
    options: ["Ready", "Running", "Blocked", "Suspended-Ready-Running"],
    correct: 3,
    explanation:
      "Suspended-Ready-Running is not a valid process state. Valid states are Ready, Running, Blocked, and variants of Suspended.",
    subject: "Operating Systems",
  },
  {
    id: 6,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "Which of the following page replacement algorithms may lead to Belady's Anomaly?",
    options: ["LRU", "FIFO", "Optimal Page Replacement", "LFU"],
    correct: 1,
    explanation:
      "FIFO page replacement algorithm may exhibit Belady's Anomaly, where increasing the number of page frames leads to more page faults.",
    subject: "Operating Systems",
  },
  {
    id: 7,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a valid addressing mode?",
    options: ["Immediate", "Indirect", "Indexed", "Absolute-Relative"],
    correct: 3,
    explanation:
      "Absolute-Relative is not a standard addressing mode. Common modes include Immediate, Indirect, Indexed, and others.",
    subject: "Computer Architecture",
  },
  {
    id: 8,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "Which of the following scheduling algorithms can lead to starvation?",
    options: ["FCFS", "Round Robin", "SJF", "None of the above"],
    correct: 2,
    explanation:
      "Shortest Job First (SJF) scheduling can lead to starvation as longer processes may get delayed indefinitely due to shorter jobs always being executed first.",
    subject: "Operating Systems",
  },
  {
    id: 9,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which data structure is used for implementing recursion?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    correct: 1,
    explanation:
      "Stack is used to implement recursion because function calls are stored in the call stack.",
    subject: "Data Structures",
  },
  {
    id: 10,
    type: "NAT",
    marks: 2,
    negative: 0,
    question:
      "How many bits are needed to address a 4GB memory with byte addressing? (Enter the number of bits)",
    answer: 32,
    tolerance: 0,
    explanation: "4GB = 2³² bytes, so 32 bits are required for addressing.",
    subject: "Computer Architecture",
  },
  {
    id: 11,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a characteristic of an object-oriented programming language?",
    options: ["Encapsulation", "Polymorphism", "Recursion", "Inheritance"],
    correct: 2,
    explanation:
      "Recursion is a programming technique, not a characteristic of object-oriented programming.",
    subject: "Programming",
  },
  {
    id: 12,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question: "What is the primary purpose of a Turing machine?",
    options: [
      "Data compression",
      "Algorithm optimization",
      "Recognizing regular languages",
      "Modeling computation",
    ],
    correct: 3,
    explanation:
      "A Turing machine is used to model computation and determine the solvability of problems.",
    subject: "Theory of Computation",
  },
  {
    id: 13,
    type: "NAT",
    marks: 2,
    negative: 0,
    question:
      "How many different binary search trees can be formed using 4 distinct keys?",
    answer: 14,
    tolerance: 0,
    explanation:
      "The number of BSTs with n nodes is given by the nth Catalan number: C(4) = 14.",
    subject: "Data Structures",
  },
  {
    id: 14,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which protocol is used for secure communication over the Internet?",
    options: ["HTTP", "FTP", "SSH", "Telnet"],
    correct: 2,
    explanation:
      "SSH (Secure Shell) is used for secure remote communication over an insecure network.",
    subject: "Computer Networks",
  },
  {
    id: 15,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question: "Which of the following is a characteristic of a deadlock?",
    options: [
      "Circular wait",
      "No mutual exclusion",
      "Preemptive resource allocation",
      "Infinite loops",
    ],
    correct: 0,
    explanation:
      "A deadlock occurs when four conditions are met: mutual exclusion, hold and wait, no preemption, and circular wait.",
    subject: "Operating Systems",
  },
  {
    id: 16,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following regular expressions correctly represents all strings over {0,1} containing at least one ‘1’?",
    options: ["0*1*", "0*10*", "(0+1)*", "0*1(0+1)*"],
    correct: 3,
    explanation:
      "The correct expression ensures that at least one '1' appears in the string.",
    subject: "Theory of Computation",
  },
  {
    id: 17,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "Which of the following is the worst-case time complexity of inserting an element in a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 1,
    explanation:
      "Insertion in a binary heap requires at most O(log n) swaps up the heap.",
    subject: "Data Structures",
  },
  {
    id: 18,
    type: "NAT",
    marks: 2,
    negative: 0,
    question:
      "How many minimum colors are needed to color a cycle graph with 7 vertices? (Enter the number)",
    answer: 3,
    tolerance: 0,
    explanation:
      "A cycle graph with an odd number of vertices requires 3 colors.",
    subject: "Graph Theory",
  },
  {
    id: 19,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is an example of an NP-complete problem?",
    options: [
      "Sorting",
      "Matrix multiplication",
      "Travelling Salesman Problem",
      "Finding the shortest path in a graph",
    ],
    correct: 2,
    explanation:
      "The Travelling Salesman Problem (TSP) is a well-known NP-complete problem.",
    subject: "Algorithms",
  },
  {
    id: 20,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "Which of the following architectures is used in the design of modern CPUs?",
    options: [
      "Harvard Architecture",
      "Von Neumann Architecture",
      "Turing Architecture",
      "Huffman Architecture",
    ],
    correct: 1,
    explanation:
      "Modern CPUs use the Von Neumann architecture where program instructions and data share the same memory.",
    subject: "Computer Architecture",
  },
];

export default gateQuestions;
