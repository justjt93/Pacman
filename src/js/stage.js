class Stage {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'stage';
        this.element.style.width = `${this.width * TILE_SIZE}px`;
        this.element.style.height = `${this.height * TILE_SIZE}px`;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }
}