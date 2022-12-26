import { timerSettings } from "./timer.js"
import { controlsSettings } from "./controls.js"
import sounds from "./sounds.js"

const playButton = document.querySelector(".playButton")
const pauseButton = document.querySelector(".pauseButton")
const stopButton = document.querySelector(".stopButton")
const setButton = document.querySelector(".setButton")
const soundOnButton = document.querySelector(".soundOnButton")
const soundOffButton = document.querySelector(".soundOffButton")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const controls = controlsSettings({
  playButton,
  pauseButton,
  stopButton,
  setButton,
})

const timer = timerSettings({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = sounds()

playButton.addEventListener("click", () => {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

pauseButton.addEventListener("click", () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

setButton.addEventListener("click", () => {
  timer.settedTime()
})

stopButton.addEventListener("click", () => {
  controls.reset()
  timer.hold()
  timer.timeCheck()
  sound.pressButton()
})

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.add("hide")
  soundOffButton.classList.remove("hide")
  sound.bgAudio.pause()
})

soundOffButton.addEventListener("click", () => {
  soundOffButton.classList.add("hide")
  soundOnButton.classList.remove("hide")
  sound.bgAudio.play()
})
