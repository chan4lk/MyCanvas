import {Position} from './Position';

export default class TextElement {

    public value: string;
    public font: string;
    public color: string;
    public position: Position;

    constructor(value: string, font: string, color: string, position: Position) {
        this.value = value;
        this.font = font;
        this.color = color;
        this.position = position;
    }
}