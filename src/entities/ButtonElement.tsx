import { TextElement } from './TextElement';
import { Position } from '../enums/Position';

/**
 * The Button Element.
 * 
 * @export
 * @class ButtonElement
 * @extends {TextElement}
 */
export class ButtonElement extends TextElement {

    /**
     * Creates an instance of ButtonElement.
     * 
     * @param {string} value
     * @param {string} font
     * @param {string} color
     * @param {Position} position
     * 
     * @memberOf ButtonElement
     */
    constructor(value: string, font: string, color: string, position: Position) {
        super(value, font, color, position);
    }
}