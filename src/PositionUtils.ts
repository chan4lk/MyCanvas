import { Position } from './Position';
import Container from './Container';

export default class PositionUtils {
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
                return container.Width ;
        }
    }

    public static getY(pos: Position, container: Container) {
        switch (pos) {
            case Position.TOP_LEFT:
            case Position.MIDDLE_LEFT:
            case Position.BOTTOM_LEFT:
                return 50;
            case Position.TOP_CENTER:
            case Position.MIDDLE_CENTER:
            case Position.BOTTOM_CENTER:
                return container.Height / 2;
            case Position.TOP_RIGHT:
            case Position.MIDDLE_RIGHT:
            case Position.BOTTOM_RIGHT:
                return container.Height;
        }
    }
}