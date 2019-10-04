class Pacman {
    constructor() {
      this.xpos = 0;
      this.mouth = 0;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'entity entity--pac pacboy-active-light';     
      }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
        this.update();
    }

    moveRight() {       
        if(this.mouth === 0){
            this.mouth = 85;
        }else{
            this.mouth = 0;
        }
        this.xpos += TILE_SIZE;
        this.update();
    }

    update() {
        this.element.style.left = `${this.xpos}px`;
        this.element.style.backgroundPositionX = `${this.mouth}px`;
    }
}