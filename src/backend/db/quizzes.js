// Quiz Database can be added here

export const quizzes = [
  {
    _id: "quiz01",
    title: "HTML",
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
    title: "CSS",
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
    title: "JS",
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
];
