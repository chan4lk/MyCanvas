import Container from './Container';
import TextElement from './TextElement';
import PositionUtils from './PositionUtils';

interface ICanvas {
    ToString(): string;
    Draw(imagePath: string): void;
    AddText(text: TextElement): void;
}

export default class MyCanvas implements ICanvas {
    defaultWidth = 100;
    defaultHeight = 200;

    private container: Container;
    private context: CanvasRenderingContext2D;
    private surface:HTMLCanvasElement;
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

        this.surface = surface;
        this.container = new Container();       
    }

    public Draw(imagePath: string): void {
        let imageElement = new Image();
        imageElement.onload = () => {
            this.ResizeCanvas(imageElement.width, imageElement.height);
            this.context.drawImage(imageElement, 0, 0);
        };
        imageElement.src = imagePath;

    }

    public AddText(text: TextElement): void {
        this.WrapText(text);
    }

    private ResizeCanvas(width: number, height: number) {
        this.container.Width = width;
        this.container.Height = height;
        this.surface.width = width;
        this.surface.height = height;
    }

    private WrapText(text: TextElement) {
        let words = text.value.split(' ');
        let line = '';
        let x = PositionUtils.getX(text.position, this.container);
        let y = PositionUtils.getY(text.position, this.container);
        let maxWidth = this.container.Width - 20 - x;
        let lineHeight = 25;
        x = (this.container.Width - maxWidth) / 2;
        
        this.context.textBaseline = 'Top';

        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        this.context.fillText(line, x, y);
    }

    public ToString(): string {
        return `The canvas width :${this.container.Width}, The canvas height :${this.container.Height}`;
    }
}
