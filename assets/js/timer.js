export function timerSettings({ minutesDisplay, secondsDisplay }) {
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
        return
      }

      if (minutes < 0) {
        resetControls()
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
        return
      }

      countdown()

      return { countdown, setDisplayTime }
    }, 1000)
  }
}
