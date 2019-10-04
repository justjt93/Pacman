const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const pacman = new Pacman();
  const app = document.querySelector('#app');
  pacman.mount(app);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight'){
      pacman.moveRight();
    }
  });
});
