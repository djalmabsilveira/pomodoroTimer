const playButton = document.querySelector(".playButton")
const pauseButton = document.querySelector(".pauseButton")
const stopButton = document.querySelector(".stopButton")
const setButton = document.querySelector(".setButton")
const soundOnButton = document.querySelector(".soundOnButton")
const soundOffButton = document.querySelector(".soundOffButton")
let minutes
let seconds
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function setDisplayTime(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetControls() {
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")
  stopButton.classList.add("hide")
  setButton.classList.remove("hide")
}

function countdown() {
  setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (seconds < 1) {
      seconds = 60
      --minutes
    }

    if (minutes < 0) {
      resetControls()
      return
    }

    setDisplayTime(minutes, --seconds)
    countdown()
  }, 1000)
}

playButton.addEventListener("click", () => {
  playButton.classList.add("hide")
  pauseButton.classList.remove("hide")
  stopButton.classList.remove("hide")
  setButton.classList.add("hide")
  countdown()
})

pauseButton.addEventListener("click", () => {
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")
})

setButton.addEventListener("click", () => {
  minutes = prompt("Defina o tempo (minutos):")
  seconds = prompt("Defina o tempo (segundos):")
  setDisplayTime(minutes, seconds)
})

stopButton.addEventListener("click", () => {
  resetControls()
  setDisplayTime(0, 0)
})

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.add("hide")
  soundOffButton.classList.remove("hide")
})

soundOffButton.addEventListener("click", () => {
  soundOffButton.classList.add("hide")
  soundOnButton.classList.remove("hide")
})
