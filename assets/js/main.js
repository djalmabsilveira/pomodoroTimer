import { timerSettings } from "./timer"
import { resetControls } from "./controls"

const playButton = document.querySelector(".playButton")
const pauseButton = document.querySelector(".pauseButton")
const stopButton = document.querySelector(".stopButton")
const setButton = document.querySelector(".setButton")
const soundOnButton = document.querySelector(".soundOnButton")
const soundOffButton = document.querySelector(".soundOffButton")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let setedMinutes
let setedSeconds
let timerTimeOut

let timer = timerSettings({ minutesDisplay, secondsDisplay })

playButton.addEventListener("click", () => {
  playButton.classList.add("hide")
  pauseButton.classList.remove("hide")
  stopButton.classList.remove("hide")
  setButton.classList.add("hide")
  timer.countdown()
})

pauseButton.addEventListener("click", () => {
  playButton.classList.remove("hide")
  pauseButton.classList.add("hide")
  clearTimeout(timerTimeOut)
})

setButton.addEventListener("click", () => {
  setedMinutes = prompt("Defina o tempo (minutos):") || 0
  setedSeconds = prompt("Defina o tempo (segundos):") || 0
  timer.setDisplayTime(
    setedMinutes === 0 && setedSeconds === 0 ? 15 : setedMinutes,
    setedSeconds
  )
})

stopButton.addEventListener("click", () => {
  resetControls()
  clearTimeout(timerTimeOut)
  setedMinutes = setedMinutes != null ? setedMinutes : 15
  setedSeconds = setedSeconds != null ? setedSeconds : 0
  timer.setDisplayTime(setedMinutes, setedSeconds)
})

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.add("hide")
  soundOffButton.classList.remove("hide")
})

soundOffButton.addEventListener("click", () => {
  soundOffButton.classList.add("hide")
  soundOnButton.classList.remove("hide")
})
