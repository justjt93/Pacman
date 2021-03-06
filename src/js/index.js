const TILE_SIZE = 85;
// this is the correct vers
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const stage = new Stage(11, 6);
  stage.mount(app);

  const pacman = new Pacman(stage);
  pacman.mount(stage);

  fetch('http://bootcamp.podlomar.org/api/pacman?width=11&height=6')
    .then(response => response.json())
    .then(entityList => {
      for (const appleInfo of entityList.apples) {
        const apple = new Entity (appleInfo.x, appleInfo.y, 'apple')
        apple.mount(stage);
      }
      for (const wallInfo of entityList.walls) {
        const wall = new Entity (wallInfo.x, wallInfo.y, 'wall')
        wall.mount(stage);
      }
      for (const bombInfo of entityList.bombs) {
        const bomb = new Entity (bombInfo.x, bombInfo.y, 'bomb')
        bomb.mount(stage);
      }

    });

  // const entity1 = new Entity(1,2,'apple');
  // entity1.mount(stage);

  // const entity2 = new Entity(2,4,'bomb');
  // entity2.mount(stage);

  // const entity3 = new Entity(3,2,'wall');
  // entity3.mount(stage);

  // const entity4 = new Entity(2,0,'bomb');
  // entity4.mount(stage);

  // const entity5 = new Entity(2,2,'bomb');
  // entity5.mount(stage);


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
