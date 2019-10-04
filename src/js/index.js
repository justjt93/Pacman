const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const stage = new Stage(5, 5);
  stage.mount(app);

  const pacman = new Pacman(stage);
  pacman.mount(stage);

  const entity1 = new Entity(2,4,'wall');
  entity1.mount(stage);

  const entity2 = new Entity(1,2,'bomb');
  entity2.mount(stage);

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
