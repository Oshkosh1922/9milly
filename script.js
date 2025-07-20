document.addEventListener('DOMContentLoaded', () => {
  const gunshotSound = new Audio('gun.mp3'); // Replace with actual gunshot mp3
  gunshotSound.volume = 0.3;

  document.body.addEventListener('click', (e) => {
    // Play gunshot sound
    gunshotSound.currentTime = 0;
    gunshotSound.play();

    // Create bullet hole
    const hole = document.createElement('img');
    hole.src = 'assets/bullet-hole.png';

    hole.className = 'bullet-hole';
    hole.style.left = `${e.pageX - 15}px`;
    hole.style.top = `${e.pageY - 15}px`;

    document.body.appendChild(hole);

    // Remove after 3 seconds
    setTimeout(() => {
      hole.classList.add('fade-out');
      setTimeout(() => hole.remove(), 1000); // Remove after fade animation
    }, 3000);
  });
});
const reloadSound = new Audio('assets/reload.mp3'); // Add a reload.mp3 in your assets
reloadSound.volume = 0.4;

document.getElementById('reloadBtn').addEventListener('click', () => {
  reloadSound.play();
  setTimeout(() => location.reload(), 700); // delay to let the sound play
});
