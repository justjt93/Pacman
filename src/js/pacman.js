class Pacman {
    constructor(stage) {
      this.xpos = 0;
      this.ypos = 0;
      this.lastXpos = 0;
      this.lastYpos = 0;
      this.mouth = 0;
      this.direction = 0;
      this.stage = stage;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'entity entity--pac pacboy-active-light';     
      }

    mount(parent) {
        this.render();
        parent.element.appendChild(this.element);
        this.maxWidth = parent.width - 1;
        this.maxHeight = parent.height - 1;
        this.update();
    }


    move(direction) {
        this.lastXpos = this.xpos;
        this.lastYpos = this.ypos;
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
        }
        
        if(this.stage.collisionDetection(this.xpos,this.ypos) === 'wall'){
            this.xpos = this.lastXpos;
            this.ypos = this.lastYpos;
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