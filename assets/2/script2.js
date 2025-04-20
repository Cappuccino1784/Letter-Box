function goHome() {
    window.location.href = "../../index.html";
  }

  let timeLeft = 25 * 60; // 25 minutes
  let timer;
  let running = false;
  
  function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent =
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function startTimer() {
    if (!running) {
      running = true;
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          clearInterval(timer);
          running = false;
          playSound();
          alert("NGHỈ ĐI ĐMMMMM HỌC XONG R WOOOOOOO ☕☕☕");
        }
      }, 1000);
    }
  }

  function playSound() {
    document.getElementById("alarm-sound").play()
  }
  
  function pauseTimer() {
    clearInterval(timer);
    running = false;
  }
  
  function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = 25 * 60;
    updateDisplay();
    
    const alarm = document.getElementById("alarm-sound");
    alarm.pause();
    alarm.currentTime = 0;
  }
  
  updateDisplay(); // Initialize display on load
  