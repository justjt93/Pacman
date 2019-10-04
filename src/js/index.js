const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const stage = new Stage(4, 9);
  stage.mount(app);

  const pacman = new Pacman();
  pacman.mount(stage.element);

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
