// script.js
document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');
  const stopButton = document.getElementById('stopButton');
  const audioPlayer = document.querySelector('.audio-player');
  const status = document.querySelector('.status');
  const progressIndicator = document.getElementById('progressIndicator');
  const movingIconsContainer = document.getElementById('movingIcons');

  let isPlaying = false;

  playButton.addEventListener('click', function() {
    if (!isPlaying) {
      isPlaying = true;
      status.textContent = 'Status: Playing';
      audioPlayer.src = 'https://github.com/intrntchld/internetchildleaks/blob/main/Granular%20Synthesis%20(Mastered%20with%20Thunder%20at%2050pct).mp3'; // Replace with the actual path to your audio file
      audioPlayer.play();
      updateProgressBar();
      createMovingIcon();
    }
  });

  stopButton.addEventListener('click', function() {
    if (isPlaying) {
      isPlaying = false;
      status.textContent = 'Status: Stopped';
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      progressIndicator.style.width = '0';
    }
  });

  function updateProgressBar() {
    if (isPlaying) {
      const duration = audioPlayer.duration;
      const currentTime = audioPlayer.currentTime;
      const progressPercentage = (currentTime / duration) * 100;
      progressIndicator.style.width = progressPercentage + '%';
      requestAnimationFrame(updateProgressBar);
    }
  }

  function createMovingIcon() {
    const icon = document.createElement('div');
    icon.textContent = '🌐'; // Custom cyber icon
    icon.className = 'moving-icon';
    movingIconsContainer.appendChild(icon);

    const animation = icon.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: 'translate(50px, 50px)' },
      ],
      {
        duration: 2000, // Adjust the duration as needed
        easing: 'linear',
        iterations: Infinity,
        direction: 'alternate',
      }
    );
  }
});
