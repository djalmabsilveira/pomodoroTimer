export function controlsSettings({
  playButton,
  pauseButton,
  stopButton,
  setButton,
}) {
  function reset() {
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
    stopButton.classList.add("hide")
    setButton.classList.remove("hide")
  }

  function play() {
    playButton.classList.add("hide")
    pauseButton.classList.remove("hide")
    stopButton.classList.remove("hide")
    setButton.classList.add("hide")
  }

  function pause() {
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
  }
  return { reset, play, pause }
}
