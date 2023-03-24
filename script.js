const adviceButton = document.getElementById("adviceButton");
const adviceText = document.getElementById("adviceText");

const adviceList = [
  "Take breaks while working.",
  "Drink water regularly.",
  "Exercise daily.",
  "Stay organized.",
  "Never stop learning.",
  "Set achievable goals.",
  "Keep a journal.",
  "Spend time with loved ones.",
  "Learn to manage stress.",
  "Maintain a healthy diet.",
  "Get enough sleep.",
  "Listen more than you speak.",
  "Stay positive.",
  "Be kind to yourself and others.",
  "Embrace failure as a learning opportunity.",
  "Celebrate your achievements.",
  "Practice gratitude.",
  "Avoid multitasking.",
  "Set priorities.",
  "Learn to say no.",
  "Avoid procrastination.",
  "Focus on what you can control.",
  "Find a mentor.",
  "Take time for self-reflection.",
  "Break tasks into smaller steps.",
  "Read books.",
  "Seek feedback.",
  "Establish a daily routine.",
  "Find a hobby.",
  "Learn from others.",
  "Don't compare yourself to others.",
  "Improve your communication skills.",
  "Travel and explore new places.",
  "Be open to change.",
  "Listen to your intuition.",
  "Make time for relaxation.",
  "Stay curious.",
  "Develop your problem-solving skills.",
  "Practice empathy.",
  "Keep your workspace clean and tidy.",
  "Surround yourself with positive people.",
  "Invest in your personal development.",
  "Be patient.",
  "Learn from your mistakes.",
  "Face your fears.",
  "Build a strong support network.",
  "Cultivate resilience.",
  "Stay focused on the present.",
  "Remember that it's never too late to start."
];

adviceButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const randomAdvice = adviceList[randomIndex];
  adviceText.innerHTML = randomAdvice;
});
