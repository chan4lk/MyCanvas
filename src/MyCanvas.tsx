import * as React from 'react';
import Container from './Container';
import { TextElement } from './TextElement';
import PositionUtils from './PositionUtils';

export interface ICanvasElements {
    background: string;
    texts: Array<TextElement>;
}

export interface ICanvas {
    toString(): string;
    draw(elements: ICanvasElements): void;
    addText(text: TextElement): void;
}

export interface ICanvasProps {
    width: number;
    height: number;
    elements: ICanvasElements;
}

export class MyCanvas extends React.Component<ICanvasProps, {}> implements ICanvas {
    defaultWidth = 100;
    defaultHeight = 200;

    private container: Container;
    private graphics: CanvasRenderingContext2D;
    private surface: HTMLCanvasElement;

    constructor(props: ICanvasProps) {
        super(props);
        this.updateCanvas = this.updateCanvas.bind(this);
        window.addEventListener('resize', this.updateCanvas, false);
    }


    /**
     * Draw the base image.
     * 
     * @param {string} imagePath
     * 
     * @memberOf MyCanvas
     */
    public draw(): void {
        this.clearCanvas();
        let imageElement = new Image();
        imageElement.onload = () => {
            this.resizeCanvas(imageElement.width, imageElement.height);
            this.graphics.drawImage(imageElement, 0, 0);
            this.addTexts();
        };
        imageElement.src = this.props.elements.background;

    }

    clearCanvas() {
        this.graphics.clearRect(0, 0, this.surface.width, this.surface.height);
    }

    addTexts() {
        this.props.elements.texts.forEach((element) => {
            this.addText(element);
        });
    }

    /**
     * Add Text elements to canvas.
     * 
     * @param {TextElement} text
     * 
     * @memberOf MyCanvas
     */
    public addText(text: TextElement): void {
        this.WrapText(text);
    }

    /**
     * Resize the canvas.
     * 
     * @private
     * @param {number} width
     * @param {number} height
     * 
     * @memberOf MyCanvas
     */
    private resizeCanvas(width: number, height: number) {
        this.container.Width = width;
        this.container.Height = height;
        this.surface.width = this.container.Width;
        this.surface.height = this.container.Height;
    }

    /**
     * Wrap the text to canvas width.
     * 
     * @private
     * @param {TextElement} text
     * 
     * @memberOf MyCanvas
     */
    private WrapText(text: TextElement) {
        let words = text.value.split(' ');
        let line = '';
        let x = PositionUtils.getX(text.position, this.container);
        let y = PositionUtils.getY(text.position, this.container);
        let maxWidth = this.container.Width - x;
        let lineHeight = parseInt(text.font.substr(0, 2), 10);

        x = (this.container.Width - maxWidth) / 2;
        y = y + lineHeight / 2;

        this.graphics.font = text.font;
        this.graphics.fillStyle = text.color;
        // this.context.textBaseline = 'Top';

        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.graphics.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.graphics.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }else {
                line = testLine;
            }
        }
        this.graphics.fillText(line, x, y);
    }

    /**
     * Canvas toString.
     * 
     * @returns {string}
     * 
     * @memberOf MyCanvas
     */
    public toString(): string {
        return `The canvas width :${this.container.Width}, The canvas height :${this.container.Height}`;
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        this.container = new Container();
        this.surface = this.refs['canvas'] as HTMLCanvasElement;
        this.graphics = (this.refs['canvas'] as any).getContext('2d');
        this.resizeCanvas(window.innerWidth, window.innerHeight);
        this.draw();
    }

    componentWillUpdate(nextProps: any, nextState: any) {
        this.draw();
    }

    render() {
        return (
            <canvas
                ref='canvas'
                width={this.props.width}
                height={this.props.height}
                className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12'/>
        );
    }
}
