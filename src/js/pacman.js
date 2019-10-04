class Pacman {
    constructor() {
      this.xpos = 0;
      this.ypos = 0;
      this.mouth = 0;
      this.direction = 0;
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

    move(direction) {
        switch (direction) {
            case 'right':  this.xpos += TILE_SIZE;
            this.direction = 0;
                break;
            case 'left':  this.xpos -= TILE_SIZE;
                this.direction = 255;
                break;
            case 'up':  this.ypos -= TILE_SIZE;
                this.direction = 85;
                break;
            case 'down':  this.ypos += TILE_SIZE;
                this.direction = 170;
                break;
            // default:
        }
        
        if(this.mouth === 0){
            this.mouth = 85;
        }else{
            this.mouth = 0;
        }
        this.update();
    }

    update() {
        this.element.style.left = `${this.xpos}px`;
        this.element.style.top = `${this.ypos}px`;
        this.element.style.backgroundPositionX = `${this.mouth}px`;
        this.element.style.backgroundPositionY = `${this.direction}px`;
    }
}