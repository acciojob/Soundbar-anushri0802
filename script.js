//your JS code here. If required.
// Define the audio files in the "sounds" folder
const soundFiles = {
  applause: new Audio('sounds/applause.mp3'),
  boo: new Audio('sounds/boo.mp3'),
  gasp: new Audio('sounds/gasp.mp3'),
  tada: new Audio('sounds/tada.mp3'),
  victory: new Audio('sounds/victory.mp3'),
  wrong: new Audio('sounds/wrong.mp3'),
};

// Function to play a sound
function playSound(sound) {
  // Stop the sound if it's already playing
  stopSounds();
  soundFiles[sound].play();
}

// Function to stop all sounds
function stopSounds() {
  // Loop through all sounds and pause them
  for (let sound in soundFiles) {
    soundFiles[sound].pause();
    soundFiles[sound].currentTime = 0; // Reset the audio to the beginning
  }
}

// Add event listeners to the buttons to play corresponding sounds
document.getElementById('applause').addEventListener('click', () => playSound('applause'));
document.getElementById('boo').addEventListener('click', () => playSound('boo'));
document.getElementById('gasp').addEventListener('click', () => playSound('gasp'));
document.getElementById('tada').addEventListener('click', () => playSound('tada'));
document.getElementById('victory').addEventListener('click', () => playSound('victory'));
document.getElementById('wrong').addEventListener('click', () => playSound('wrong'));

// Stop button functionality
document.getElementById('stop').addEventListener('click', stopSounds);
