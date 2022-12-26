import sounds from "./sounds.js"

const sound = sounds()

export function timerSettings({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut
  let setedMinutes
  let setedSeconds

  function setDisplayTime(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        setDisplayTime(setedMinutes, setedSeconds)
        sound.timesUp()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      setDisplayTime(minutes, --seconds)

      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        setDisplayTime(setedMinutes, setedSeconds)
        sound.timesUp()
        return
      }

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function settedTime() {
    setedMinutes = prompt("Defina o tempo (minutos):") || 0
    setedSeconds = prompt("Defina o tempo (segundos):") || 0
    setDisplayTime(
      setedMinutes === 0 && setedSeconds === 0 ? 15 : setedMinutes,
      setedSeconds
    )
  }

  function timeCheck() {
    setedMinutes = setedMinutes != null ? setedMinutes : 15
    setedSeconds = setedSeconds != null ? setedSeconds : 0
    setDisplayTime(setedMinutes, setedSeconds)
  }

  return { countdown, setDisplayTime, hold, settedTime, timeCheck }
}
