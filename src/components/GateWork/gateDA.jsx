const gateDAQuestions = [
  {
    id: 1,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "In a linear regression model, the R-squared value is 0.85. What percentage of variance in the dependent variable is explained by the independent variables?",
    options: ["0.85%", "8.5%", "85%", "850%"],
    correct: 2,
    explanation:
      "R-squared value of 0.85 means 85% of the variance in the dependent variable is explained by the independent variables.",
    subject: "Statistics",
  },
  {
    id: 2,
    type: "NAT",
    marks: 2,
    negative: 0,
    question:
      "Calculate the mean absolute error (MAE) if the predicted values are [4, 5, 6] and actual values are [3, 4, 8]",
    answer: 1.33,
    tolerance: 0.01,
    explanation: "MAE = (|4-3| + |5-4| + |6-8|)/3 = (1 + 1 + 2)/3 = 1.33",
    subject: "Model Evaluation",
  },
  {
    id: 3,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which sampling technique ensures that each population stratum is proportionally represented in the sample?",
    options: [
      "Simple Random Sampling",
      "Stratified Sampling",
      "Cluster Sampling",
      "Systematic Sampling",
    ],
    correct: 1,
    explanation:
      "Stratified sampling ensures proportional representation of each stratum in the final sample.",
    subject: "Sampling Methods",
  },
  {
    id: 4,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "What is the time complexity of K-means clustering algorithm in terms of n samples, k clusters, and i iterations?",
    options: ["O(nk)", "O(n log k)", "O(nki)", "O(n²k)"],
    correct: 2,
    explanation:
      "K-means has a time complexity of O(nki) where n is number of samples, k is clusters, and i is iterations.",
    subject: "Machine Learning",
  },
  {
    id: 5,
    type: "NAT",
    marks: 2,
    negative: 0,
    question:
      "If a dataset has 20% missing values, what is the minimum required improvement in model performance to justify using imputation instead of deletion?",
    answer: 20,
    tolerance: 0.5,
    explanation:
      "With 20% missing data, imputation should improve model performance by at least 20% to be worth the computational cost.",
    subject: "Data Preprocessing",
  },
  {
    id: 6,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question:
      "Which technique is most appropriate for handling multicollinearity in regression analysis?",
    options: [
      "Principal Component Analysis",
      "Feature Scaling",
      "Data Normalization",
      "Data Standardization",
    ],
    correct: 0,
    explanation:
      "PCA is most effective for handling multicollinearity as it creates uncorrelated principal components.",
    subject: "Statistics",
  },
  {
    id: 7,
    type: "NAT",
    marks: 2,
    negative: 0,
    question: "What is the entropy of a fair coin toss?",
    answer: 1,
    tolerance: 0.01,
    explanation:
      "Entropy for a fair coin toss = -Σ(p log₂ p) = -(0.5 log₂ 0.5 + 0.5 log₂ 0.5) = 1 bit",
    subject: "Information Theory",
  },
  {
    id: 8,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which visualization is most appropriate for showing the relationship between a categorical and a continuous variable?",
    options: ["Scatter Plot", "Box Plot", "Line Chart", "Pie Chart"],
    correct: 1,
    explanation:
      "Box plots are ideal for showing the distribution of a continuous variable across different categories.",
    subject: "Data Visualization",
  },
  {
    id: 9,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a measure of central tendency?",
    options: ["Mean", "Median", "Mode", "Variance"],
    correct: 3,
    explanation: "Variance is a measure of dispersion, not central tendency.",
    subject: "Statistics",
  },
  {
    id: 10,
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question: "What is the primary goal of A/B testing in data analysis?",
    options: [
      "Identifying Outliers",
      "Feature Selection",
      "Hypothesis Testing",
      "Data Visualization",
    ],
    correct: 2,
    explanation:
      "A/B testing is primarily used for hypothesis testing to compare two versions of a variable.",
    subject: "Data Analysis",
  },
  {
    id: 11,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a valid data type in Python?",
    options: ["Integer", "Float", "Complex", "String", "Boolean"],
    correct: 4,
    explanation: "Boolean is a valid data type in Python.",
    subject: "Python Programming",
  },
  {
    id: 12,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x // y)",
    options: ["2.5", "2.0", "2", "2.2"],
    correct: 2,
    explanation:
      "The '//' operator performs floor division, which truncates the decimal part.",
    subject: "Python Programming",
  },
  {
    id: 13,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a valid keyword in Python?",
    options: ["lambda", "function", "yield", "pass"],
    correct: 1,
    explanation: "'function' is not a keyword in Python.",
    subject: "Python Programming",
  },
  {
    id: 14,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'pass' statement in Python?",
    options: [
      "Terminate the program",
      "Skip the current iteration",
      "Define a function",
      "No operation",
    ],
    correct: 3,
    explanation:
      "The 'pass' statement is used as a placeholder when no action is required.",
    subject: "Python Programming",
  },
  {
    id: 15,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is a valid way to open a file in Python?",
    options: [
      "open(file.txt)",
      "open('file.txt', 'r')",
      "read('file.txt')",
      "file.open('file.txt')",
    ],
    correct: 1,
    explanation:
      "The 'open' function requires the filename and mode as arguments.",
    subject: "Python Programming",
  },
  {
    id: 16,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nprint(x[3])",
    options: ["1", "2", "3", "IndexError"],
    correct: 3,
    explanation:
      "IndexError occurs when trying to access an index beyond the list length.",
    subject: "Python Programming",
  },
  {
    id: 17,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Which of the following is not a valid data structure in Python?",
    options: ["List", "Tuple", "Stack", "Queue", "Tree"],
    correct: 4,
    explanation: "Tree is a data structure that is not built-in to Python.",
    subject: "Python Programming",
  },
  {
    id: 18,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the purpose of the 'self' parameter in Python class methods?",
    options: [
      "Reference to the current instance",
      "Reference to the parent class",
      "Reference to the child class",
      "Reference to the base class",
    ],
    correct: 0,
    explanation:
      "'self' is used to refer to the current instance of the class.",
    subject: "Python Programming",
  },
  {
    id: 19,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to create a dictionary in Python?",
    options: [
      "{1: 'one', 2: 'two'}",
      "dict([(1, 'one'), (2, 'two')])",
      "{'one': 1, 'two': 2}",
      "dict(one=1, two=2)",
    ],
    correct: 3,
    explanation:
      "The key-value pairs in a dictionary must be separated by colons, not commas.",
    subject: "Python Programming",
  },
  {
    id: 20,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nx.append([4, 5])\nprint(x)",
    options: [
      "[1, 2, 3, 4, 5]",
      "[1, 2, 3, [4, 5]]",
      "[1, 2, 3, 4], [5]",
      "[1, 2, 3, 4], 5",
    ],
    correct: 1,
    explanation:
      "The 'append' method adds the entire list [4, 5] as a single element to the original list.",
    subject: "Python Programming",
  },
  {
    id: 21,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to remove an element from a list in Python?",
    options: ["list.remove(3)", "list.pop(3)", "del list[3]", "list.delete(3)"],
    correct: 3,
    explanation:
      "'delete' is not a valid method to remove an element from a list in Python.",
    subject: "Python Programming",
  },
  {
    id: 22,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'break' statement in Python?",
    options: [
      "Exit the current loop",
      "Skip the current iteration",
      "Terminate the program",
      "No operation",
    ],
    correct: 0,
    explanation:
      "The 'break' statement is used to exit the current loop prematurely.",
    subject: "Python Programming",
  },
  {
    id: 23,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to iterate over a list in Python?",
    options: [
      "for i in range(len(list))",
      "for item in list",
      "for i, item in enumerate(list)",
      "for i in list",
    ],
    correct: 0,
    explanation:
      "Using 'range(len(list))' is not the most Pythonic way to iterate over a list.",
    subject: "Python Programming",
  },
  {
    id: 24,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x % y)",
    options: ["2.5", "2.0", "2", "1"],
    correct: 3,
    explanation: "The '%' operator returns the remainder of the division.",
    subject: "Python Programming",
  },
  {
    id: 25,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to create a tuple in Python?",
    options: ["(1, 2, 3)", "tuple([1, 2, 3])", "(1, 2, 3,)", "1, 2, 3"],
    correct: 3,
    explanation: "The comma at the end is optional when creating a tuple.",
    subject: "Python Programming",
  },
  {
    id: 26,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'continue' statement in Python?",
    options: [
      "Exit the current loop",
      "Skip the current iteration",
      "Terminate the program",
      "No operation",
    ],
    correct: 1,
    explanation:
      "The 'continue' statement is used to skip the current iteration and continue with the next one.",
    subject: "Python Programming",
  },
  {
    id: 27,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to create a set in Python?",
    options: ["{1, 2, 3}", "set([1, 2, 3])", "{1: 'one', 2: 'two'}", "set()"],
    correct: 2,
    explanation:
      "Sets in Python are created using curly braces or the 'set' function.",
    subject: "Python Programming",
  },
  {
    id: 28,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = {1: 'one', 2: 'two'}\nprint(x[1])",
    options: ["1", "'one'", "2", "'two'"],
    correct: 1,
    explanation:
      "Dictionaries in Python use keys to access values, so x[1] returns 'one'.",
    subject: "Python Programming",
  },
  {
    id: 29,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to add an element to a set in Python?",
    options: ["set.add(4)", "set.append(4)", "set.update([4])", "set |= {4}"],
    correct: 1,
    explanation:
      "'add' is the correct method to add an element to a set in Python.",
    subject: "Python Programming",
  },
  {
    id: 30,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'union' method in Python sets?",
    options: [
      "Find the intersection of two sets",
      "Combine two sets into one",
      "Find the difference between two sets",
      "Check if one set is a subset of another",
    ],
    correct: 1,
    explanation: "The 'union' method combines two sets into a single set.",
    subject: "Python Programming",
  },
  {
    id: 31,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to remove an element from a set in Python?",
    options: ["set.remove(3)", "set.discard(3)", "del set[3]", "set.pop()"],
    correct: 2,
    explanation:
      "Sets do not support indexing, so 'del set[3]' is not a valid operation.",
    subject: "Python Programming",
  },
  {
    id: 32,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = {1, 2, 3}\nx.add(4)\nprint(x)",
    options: [
      "{1, 2, 3, 4}",
      "{1, 2, 3}, 4",
      "{1, 2, 3}, {4}",
      "{1, 2, 3, {4}}",
    ],
    correct: 0,
    explanation: "The 'add' method adds a single element to the set.",
    subject: "Python Programming",
  },
  {
    id: 33,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to create a dictionary in Python?",
    options: [
      "{1: 'one', 2: 'two'}",
      "dict([(1, 'one'), (2, 'two')])",
      "{'one': 1, 'two': 2}",
      "dict(one=1, two=2)",
    ],
    correct: 3,
    explanation:
      "The key-value pairs in a dictionary must be separated by colons, not commas.",
    subject: "Python Programming",
  },
  {
    id: 34,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'pop' method in Python dictionaries?",
    options: [
      "Remove a key-value pair",
      "Retrieve a value by key",
      "Remove the last key-value pair",
      "Retrieve the last key-value pair",
    ],
    correct: 0,
    explanation:
      "The 'pop' method removes a key-value pair from the dictionary.",
    subject: "Python Programming",
  },
  {
    id: 35,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = {1: 'one', 2: 'two'}\nprint(x.get(3, 'NA'))",
    options: ["1", "'one'", "'NA'", "None"],
    correct: 2,
    explanation:
      "The 'get' method returns the value for the specified key, or a default value if the key is not found.",
    subject: "Python Programming",
  },
  {
    id: 36,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to iterate over a dictionary in Python?",
    options: [
      "for key in dict",
      "for key in dict.keys()",
      "for value in dict.values()",
      "for key, value in dict.items()",
    ],
    correct: 0,
    explanation:
      "Iterating over a dictionary directly will only give you the keys.",
    subject: "Python Programming",
  },
  {
    id: 37,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the purpose of the 'clear' method in Python dictionaries?",
    options: [
      "Remove all key-value pairs",
      "Retrieve all keys",
      "Retrieve all values",
      "Remove the last key-value pair",
    ],
    correct: 0,
    explanation:
      "The 'clear' method removes all key-value pairs from the dictionary.",
    subject: "Python Programming",
  },
  {
    id: 38,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = {1: 'one', 2: 'two'}\nprint(x.pop(1))",
    options: ["1", "'one'", "'two'", "None"],
    correct: 1,
    explanation:
      "The 'pop' method returns the value for the specified key and removes the key-value pair from the dictionary.",
    subject: "Python Programming",
  },
  {
    id: 39,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "Which of the following is not a valid way to create a tuple in Python?",
    options: ["(1, 2, 3)", "tuple([1, 2, 3])", "(1, 2, 3,)", "1, 2, 3"],
    correct: 3,
    explanation: "The comma at the end is optional when creating a tuple.",
    subject: "Python Programming",
  },
  {
    id: 40,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'count' method in Python tuples?",
    options: [
      "Count the number of elements",
      "Retrieve the element at a specific index",
      "Find the index of a specific element",
      "Remove the last element",
    ],
    correct: 0,
    explanation:
      "The 'count' method returns the number of occurrences of a specified element in the tuple.",
    subject: "Python Programming",
  },
  {
    id: 41,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = (1, 2, 3)\nprint(x[1])",
    options: ["1", "2", "3", "IndexError"],
    correct: 1,
    explanation:
      "Tuples are indexed starting from 0, so x[1] returns the second element, 2.",
    subject: "Python Programming",
  },
  {
    id: 42,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'index' method in Python tuples?",
    options: [
      "Find the index of a specific element",
      "Retrieve the element at a specific index",
      "Count the number of elements",
      "Remove the last element",
    ],
    correct: 0,
    explanation:
      "The 'index' method returns the index of the first occurrence of a specified element in the tuple.",
    subject: "Python Programming",
  },
  {
    id: 43,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = (1, 2, 3)\nx[1] = 4",
    options: ["(1, 4, 3)", "(1, 2, 3, 4)", "Error", "None"],
    correct: 2,
    explanation:
      "Tuples are immutable, so you cannot change the value of an element once it is assigned.",
    subject: "Python Programming",
  },
  {
    id: 44,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'copy' method in Python lists?",
    options: [
      "Create a shallow copy",
      "Create a deep copy",
      "Copy elements to a new list",
      "Copy elements to an existing list",
    ],
    correct: 0,
    explanation:
      "The 'copy' method creates a shallow copy of the list, i.e., a new list with the same elements.",
    subject: "Python Programming",
  },
  {
    id: 45,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\ny = x\ny[1] = 4\nprint(x)",
    options: ["[1, 2, 3]", "[1, 4, 3]", "[1, 4, 3, 4]", "[1, 2, 3, 4]"],
    correct: 1,
    explanation:
      "Assigning a list to another variable creates a reference, so modifying 'y' also changes 'x'.",
    subject: "Python Programming",
  },
  {
    id: 46,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'extend' method in Python lists?",
    options: [
      "Add an element to the end",
      "Add elements from another list",
      "Remove an element",
      "Remove elements from another list",
    ],
    correct: 1,
    explanation:
      "The 'extend' method adds elements from another list to the end of the current list.",
    subject: "Python Programming",
  },
  {
    id: 47,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nx.extend([4, 5])\nprint(x)",
    options: [
      "[1, 2, 3, 4, 5]",
      "[1, 2, 3], [4, 5]",
      "[1, 2, 3], 4, 5",
      "[1, 2, 3, 4], 5",
    ],
    correct: 0,
    explanation:
      "The 'extend' method adds elements from the specified list to the end of the original list.",
    subject: "Python Programming",
  },
  {
    id: 48,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'insert' method in Python lists?",
    options: [
      "Add an element to the end",
      "Add an element at a specific index",
      "Remove an element",
      "Remove an element at a specific index",
    ],
    correct: 1,
    explanation:
      "The 'insert' method adds an element at the specified index, shifting existing elements to the right.",
    subject: "Python Programming",
  },
  {
    id: 49,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nx.insert(1, 4)\nprint(x)",
    options: ["[1, 2, 3]", "[1, 4, 2, 3]", "[1, 2, 4, 3]", "[1, 2, 3, 4]"],
    correct: 2,
    explanation:
      "The 'insert' method adds the element 4 at index 1, shifting the existing elements to the right.",
    subject: "Python Programming",
  },
  {
    id: 50,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'remove' method in Python lists?",
    options: [
      "Add an element to the end",
      "Add an element at a specific index",
      "Remove an element",
      "Remove an element at a specific index",
    ],
    correct: 2,
    explanation:
      "The 'remove' method deletes the first occurrence of the specified element from the list.",
    subject: "Python Programming",
  },
  {
    id: 51,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nx.remove(2)\nprint(x)",
    options: ["[1, 2, 3]", "[1, 3]", "[1, 2]", "[2, 3]"],
    correct: 1,
    explanation:
      "The 'remove' method deletes the first occurrence of the specified element from the list.",
    subject: "Python Programming",
  },
  {
    id: 52,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "What is the purpose of the 'pop' method in Python lists?",
    options: [
      "Add an element to the end",
      "Add an element at a specific index",
      "Remove an element",
      "Remove an element at a specific index",
    ],
    correct: 3,
    explanation:
      "The 'pop' method removes and returns the element at the specified index.",
    subject: "Python Programming",
  },
  {
    id: 53,
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question:
      "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nx.pop(1)\nprint(x)",
    options: ["[1, 2, 3]", "[1, 3]", "[1, 2]", "[2, 3]"],
    correct: 3,
    explanation:
      "The 'pop' method removes and returns the element at the specified index.",
    subject: "Python Programming",
  },
];

export default gateDAQuestions;
