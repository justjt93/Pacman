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
        this.maxWidth = parseInt(parent.style.width, 10) / TILE_SIZE - 1;
        this.maxHeight = parseInt(parent.style.height, 10) / TILE_SIZE - 1;
        this.update();
    }

    move(direction) {
        switch (direction) {
            case 'right':  
                if (this.xpos < this.maxWidth) {this.xpos += 1;}
                this.direction = 0;
                break;
            case 'left':  
            if (this.xpos > 0) {this.xpos -= 1;}
                this.direction = 255;
                break;
            case 'up':  
                if (this.ypos > 0) {this.ypos -= 1;}
                this.direction = 85;
                break;
            case 'down':
                if (this.ypos < this.maxHeight) {this.ypos += 1;}
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
        this.element.style.left = `${this.xpos * TILE_SIZE}px`;
        this.element.style.top = `${this.ypos * TILE_SIZE}px`;
        this.element.style.backgroundPositionX = `${this.mouth}px`;
        this.element.style.backgroundPositionY = `${this.direction}px`;
    }
}