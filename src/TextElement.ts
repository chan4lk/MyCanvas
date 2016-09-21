import {Position} from './Position';

/**
 * The Text Element.
 * 
 * @export
 * @class TextElement
 */
export class TextElement {

    /**
     * The value of the TextElement.
     * @type {string}
     * @memberOf TextElement
     */
    public value: string;

    /**
     * The font of the element.
     * @type {string}
     * @memberOf TextElement
     */
    public font: string;

    /**
     * The color of the element.
     * @type {string}
     * @memberOf TextElement
     */
    public color: string;

    /**
     * The position of the element.
     * @type {Position}
     * @memberOf TextElement
     */
    public position: Position;

    /**
     * Creates an instance of TextElement.
     * @param {string} value
     * @param {string} font
     * @param {string} color
     * @param {Position} position
     * 
     * @memberOf TextElement
     */
    constructor(value: string, font: string, color: string, position: Position) {
        this.value = value;
        this.font = font;
        this.color = color;
        this.position = position;
    }
}