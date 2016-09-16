import Container from './Container';
import TextElement from './TextElement';
import PositionUtils from './PositionUtils';

interface ICanvas {
    ToString(): string;
    Draw(surface: HTMLCanvasElement): void;
}

export default class MyCanvas implements ICanvas {
    defaultWidth = 100;
    defaultHeight = 200;

    private container: Container;
    private context: CanvasRenderingContext2D;

    /**
     * Creates an instance of MyCanvas.
     * 
     * @param {HTMLCanvasElement} surface
     * 
     * @memberOf MyCanvas
     */
    constructor(surface: HTMLCanvasElement) {
        if (surface) {
            this.context = surface.getContext('2d');           
        } else {
            surface = document.createElement('Canvas') as HTMLCanvasElement;
            surface.clientWidth = this.defaultWidth;
            surface.clientHeight = this.defaultHeight;
            document.appendChild(surface);
            this.context = surface.getContext('2d');
        }

        let width = surface.width;
        let height = surface.height;

        this.container = new Container();
        this.container.Height = height;
        this.container.Width  = width;
    }

    public Draw(): void {
        
    }

    public AddHeader(header: TextElement): void {
        let x = PositionUtils.getX(header.position, this.container);
        let y = PositionUtils.getY(header.position, this.container);
        this.context.font = header.font;
        this.context.fillText(header.value, x, y);
    }

    public ToString(): string {
        return `The canvas width :${this.container.Width}, The canvas height :${this.container.Height}`;
    }
}
