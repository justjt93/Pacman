const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const pacman = new Pacman();
  const app = document.querySelector('#app');
  pacman.mount(app);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight'){
      pacman.move('right');
    }
    if(event.key === 'ArrowLeft'){
      pacman.move('left');
    }
    if(event.key === 'ArrowUp'){
      pacman.move('up');
    }
    if(event.key === 'ArrowDown'){
      pacman.move('down');
    }
  });
});
