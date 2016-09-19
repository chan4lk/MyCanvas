import { Position } from './Position';
import Container from './Container';

export default class PositionUtils {

    /**
     * Get the X value based on the Position.
     * 
     * @static
     * @param {Position} pos
     * @param {Container} container
     * @returns
     * 
     * @memberOf PositionUtils
     */
    public static getX(pos: Position, container: Container) {
        switch (pos) {
            case Position.TOP_LEFT:
            case Position.MIDDLE_LEFT:
            case Position.BOTTOM_LEFT:
                return 10;
            case Position.TOP_CENTER:
            case Position.MIDDLE_CENTER:
            case Position.BOTTOM_CENTER:
                return container.Width / 2;
            case Position.TOP_RIGHT:
            case Position.MIDDLE_RIGHT:
            case Position.BOTTOM_RIGHT:
                return container.Width;
        }
    }

    /**
     * Get the Y value based on the position.
     * 
     * @static
     * @param {Position} pos
     * @param {Container} container
     * @returns
     * 
     * @memberOf PositionUtils
     */
    public static getY(pos: Position, container: Container) {
        switch (pos) {
            case Position.TOP_LEFT:
            case Position.TOP_CENTER:
            case Position.TOP_RIGHT:
                return 10;

            case Position.MIDDLE_LEFT:
            case Position.MIDDLE_CENTER:
            case Position.MIDDLE_RIGHT:
                return container.Height / 2;

            case Position.BOTTOM_LEFT:
            case Position.BOTTOM_CENTER:
            case Position.BOTTOM_RIGHT:
                return container.Height;
        }
    }
}