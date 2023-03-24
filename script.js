document.getElementById('adviceButton').addEventListener('click', getAdvice);
document.getElementById('conversationButton').addEventListener('click', showConversation);

const adviceList = [
  'Believe in yourself',
  'Take breaks when working',
  'Stay curious and keep learning',
  'Set realistic goals',
  'Take responsibility for your actions',
  'Accept and embrace change',
  'Focus on what you can control',
  'Practice gratitude',
  'Stay true to your values',
  'Don’t be afraid to ask for help',
  'Stay organized',
  'Surround yourself with positive people',
  'Be proactive, not reactive',
  'Keep an open mind',
  'Never stop networking',
  'Don’t be too hard on yourself',
  'Learn from your mistakes',
  'Find balance in your life',
  'Listen more than you speak',
  'Stay persistent',
  'Be patient',
  'Take care of your health',
  'Stay humble',
  'Be open to feedback',
  'Keep a journal',
  'Be kind to others',
  'Face your fears',
  'Give back to your community',
  'Acknowledge your accomplishments',
  'Forgive and move on',
  'Prioritize your time',
  'Believe in the power of positive thinking',
  'Set boundaries',
  'Find your passion',
  'Develop resilience',
  'Celebrate small victories',
  'Be true to yourself',
  'Embrace failure as a learning opportunity',
  'Cultivate empathy',
  'Accept compliments gracefully',
  'Practice self-discipline',
  'Don’t compare yourself to others',
  'Embrace imperfection',
  'Express gratitude daily',
  'Learn to say no',
  'Know your worth',
  'Take risks',
  'Stay open to new opportunities',
  'Cultivate a growth mindset',
  'Trust your intuition'
];

function getAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const advice = adviceList[randomIndex];
  document.getElementById('adviceText').innerHTML = advice;
}

const conversationImages = [
  'conversation-1.png',
  'conversation-2.png',
  'conversation-3.png',
  'conversation-4.png',
  'conversation-5.png',
  'conversation-6.png',
  'conversation-7.png',
  'conversation-8.png',
  'conversation-9.png',
  'conversation-10.png',
  'conversation-11.png',
  'conversation-12.png',
  'conversation-13.png',
  'conversation-14.png',
  'conversation-15.png',
  'conversation-16.png',
  'conversation-17.png',
  'conversation-18.png',
  'conversation-19.png',
  'conversation-20.png',
  'conversation-21.png',
  'conversation-22.png',
  'conversation-23.png',
  'conversation-24.png',
  'conversation-25.png',
  'conversation-26.png',
  'conversation-27.png',
  'conversation-28.png',
  'conversation-29.png',
  'conversation-30.png',
  'conversation-31.png',
  'conversation-32.png',
  'conversation-33.png',
  'conversation-34.png',
  'conversation-35.png',
  'conversation-36.png',
];

let currentImageIndex = 0;

function showConversation() {
  const conversationContainer = document.getElementById('conversationContainer');
  const conversationImage = document.getElementById('conversationImage');
  
  if (conversationContainer.style.display === 'none') {
    conversationContainer.style.display = 'block';
    conversationImage.src = conversationImages[currentImageIndex];
  } else {
    currentImageIndex = (currentImageIndex + 1) % conversationImages.length;
    conversationImage.src = conversationImages[currentImageIndex];
  }
}
