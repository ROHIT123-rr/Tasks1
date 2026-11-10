const helloButton = document.getElementById('helloButton');
const demoMessage = document.getElementById('demoMessage');

helloButton.addEventListener('click', () => {
  const message = 'Great job! You have added JavaScript interactivity to your webpage.';
  demoMessage.textContent = message;
  alert('Hello! Welcome to the world of web development.');
});
