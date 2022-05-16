// Quiz Database can be added here

export const quizzes = [
  {
    _id: "quiz01",
    title: "HTML Easy",
    category: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Hyper Text Marking Language",
          "Hero Text Markup Language",
          "Hyper Text Main Language",
        ],
      },
      {
        question:
          "What is the difference between an opening tag and a closing tag?",
        options: [
          "Closing tag has a ~ in front",
          "Opening tag has a / in front",
          "Closing tag has a / in front",
          "There is no difference",
        ],
      },
      {
        question: "How is document type initialized in HTML5?",
        options: [
          "<!DOCTYPE=html>",
          "</DOCTYPE=html>",
          "<!DOCTYPE html>",
          "</DOCTYPE html>",
        ],
      },
      {
        question:
          "Which of the following HTML element is used for creating an unordered list?",
        options: ["<ui>", "<ol>", "<li>", "<ul>"],
      },
    ],
    answers: [0, 2, 2, 3],
  },
  {
    _id: "quiz02",
    title: "CSS Easy",
    category: "CSS",
    questions: [
      {
        question: "Which of the below is the abbreviation of CSS ?",
        options: [
          "Cascade sheets style",
          "Color and style sheets",
          "Cascading style sheets",
          "Coded Style Sheet",
        ],
      },
      {
        question:
          "Which of the correct syntax to add the external stylesheet in CSS ?",
        options: [
          "<style src = quiz.css>",
          '<style src = "quiz.css">',
          "<stylesheet> quiz.css </stylesheet>",
          '<link rel="stylesheet" type="quiz/css" href="quiz.css">',
        ],
      },
      {
        question:
          "Which of the below CSS properties is used to change the background color of CSS ?",
        options: ["background-color", "color-background", "color", "bg color"],
      },
      {
        question:
          "Which of the below is correct syntax when we put a line over text in CSS ?",
        options: [
          "text-decoration: line",
          "text-decoration: underline",
          "text-decoration: overline",
          "text-decoration: none",
        ],
      },
    ],
    answers: [2, 3, 0, 2],
  },
  {
    _id: "quiz03",
    title: "JS Easy",
    category: "JS",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<javascript>", "<script>", "<js>"],
      },
      {
        question:
          'What is the correct syntax for referring to an external script called "cobra.js"?',
        options: [
          '<script src="cobra.js">',
          '<script href="cobra.js">',
          '<script name="cobra.js">',
          '<script="cobra.js">',
        ],
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
          ' message("Hello World")',
          'toast("Hello World")',
          'modal("Hello World")',
          'alert("Hello World")',
        ],
      },
      {
        question: "A variable can be declared in js using ?",
        options: ["var", "let", "const", "All of above"],
      },
    ],
    answers: [2, 0, 3, 3],
  },
  {
    _id: "quiz04",
    title: "HTML Medium",
    category: "HTML",
    questions: [
      {
        question: "The root element of a html page is?",
        options: ["<title>", "<html>", "<body>", "<head>"],
      },
      {
        question: "How many sizes of headers are available in HTML by default?",
        options: ["5", "1", "3", "6"],
      },
      {
        question: "How to display preformatted text in HTML?",
        options: ["<p>", "<pre>", "<hr>", "All of above"],
      },
      {
        question:
          "Which attribute is used to provide a unique name to an HTML element?",
        options: ["id", "class", "type", "None of the above"],
      },
    ],
    answers: [1, 3, 1, 0],
  },
  {
    _id: "quiz05",
    title: "CSS Medium",
    category: "CSS",
    questions: [
      {
        question:
          "What type of CSS is generally recommended for designing large web pages?",
        options: ["Inline", "Internal", "External", "None of the above"],
      },
      {
        question: "Can negative values be allowed in padding property?",
        options: ["Yes", "No", "Depends on browser", "None of the above"],
      },
      {
        question:
          "The CSS property used to specify the transparency of an element is?",
        options: ["Opacity", "Visibility", "Filter", "None of the above"],
      },
      {
        question: "Which of the following are parts of the CSS box model?",
        options: ["Margin", "Border", "Padding", "All of the above"],
      },
    ],
    answers: [2, 1, 0, 3],
  },
  {
    _id: "quiz06",
    title: "JS Medium",
    category: "JS",
    questions: [
      {
        question: "What is the use of the <noscript> tag in Javascript?",
        options: [
          "The contents are displayed by non-js browsers",
          "Clears all the cookie and cache",
          "Both A & B",
          "None of the above",
        ],
      },
      {
        question: "const a = Math.max(); What is the value of a?",
        options: ["-Infinity", "0", "+Infinity", "Error"],
      },
      {
        question: "Predict the output : console.log(NaN === NaN)",
        options: ["true", "false", "undefined", "Error"],
      },
      {
        question: "Predict the output : console.log(typeof(NaN))",
        options: ["String", "Number", "Object", "Array"],
      },
    ],
    answers: [0, 0, 1, 2],
  },
  {
    _id: "quiz07",
    title: "HTML Hard",
    category: "HTML",
    questions: [
      {
        question: "How are quotations defined in HTML?",
        options: ["<quote>", "<block>", "<blockquote>", "None of the above"],
      },
      {
        question: "What is the correct syntax to write an HTML comment?",
        options: ["<!-- Comment -->", "//comment", "# comment", "/*comment*/"],
      },
      {
        question: "Which of the following is true about HTML tags?",
        options: [
          "Are case sensitive",
          "Are not case sensitive",
          "Are in uppercase",
          "Are in lowercase",
        ],
      },
      {
        question: "What are the properties of block-level elements?",
        options: [
          "It always starts on a new line",
          "It always takes full width available",
          "It has top and bottom margin",
          "All of the above",
        ],
      },
    ],
    answers: [2, 0, 1, 3],
  },
  {
    _id: "quiz08",
    title: "CSS Hard",
    category: "CSS",
    questions: [
      {
        question:
          "Which of the following properties is used to align text in CSS?",
        options: ["text-align", "text-alignment", "text", "text-position"],
      },
      {
        question:
          "Which of the following CSS properties specifies the stack order of elements?",
        options: ["x-index", "y-index", "z-index", "stack-index"],
      },
      {
        question: "Which of the following are units of relative length in CSS?",
        options: ["em", "rem", "vmax", "All of the above"],
      },
      {
        question:
          "How can we add more importance to a property/value than normal?",
        options: ["$important", "!important", "%important", "*important"],
      },
    ],
    answers: [0, 2, 3, 1],
  },
  {
    _id: "quiz09",
    title: "JS Hard",
    category: "JS",
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        options: ["convert()", "parse()", "stringify()", "All of the above"],
      },
      {
        question:
          "What keyword is used to declare an asynchronous function in Javascript?",
        options: ["sync", "async", "await", "wait"],
      },
      {
        question: 'Predict the output : console.log(parseInt("123Hello"))',
        options: ["NaN NaN", "123 NaN", "123 123", "NaN 123"],
      },
      {
        question: "How to stop an interval timer in Javascript?",
        options: [
          "removeTimer",
          "removeInterval",
          "clearTimer",
          "clearInterval",
        ],
      },
    ],
    answers: [2, 1, 1, 3],
  },
];
