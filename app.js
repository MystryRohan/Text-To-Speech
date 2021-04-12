const playButton = document.getElementById("play");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");

const darkModeContainer = document.querySelector(".container");

const welcome = ["I'm Good", "I am Fine, How about You ?"];
const weather = ["Sunny", "Hot", "Rainy"];

playButton.addEventListener("click", () => {
  playText(textInput.value);
});

function playText(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.text = text;

  if (text.includes("how are you")) {
    const finalOutput = welcome[Math.floor(Math.random() * welcome.length)];
    utterance.text = finalOutput;
  }
  if (text.includes("what is your name")) {
    const finalOutput = naav;
    utterance.text = finalOutput;
  }
  if (text.includes("weather")) {
    const finalOutput = weather[Math.floor(Math.random() * weather.length)];
    utterance.text = finalOutput;
  }
  if (text.includes("date")) {
    const finalOutput = Date();
    utterance.text = finalOutput;
  }
  if (text.includes("dark mode")) {
    utterance.text = "Turning on Dark Mode!";
    darkMode();
  }
  utterance.rate = speedInput.value || 1;
  utterance.pitch = 3;
  utterance.volume = 1;
  speechSynthesis.speak(utterance);
}

//Toggle To Dark Mode
const darkMode = () => {
  darkModeContainer.classList.add("dark");
};
const lightMode = () => {
  darkModeContainer.classList.remove("dark");
};
