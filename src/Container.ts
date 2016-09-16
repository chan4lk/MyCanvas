
/**
 * Container for the canvas.
 * 
 * @export
 * @class Container
 */
export default class Container {
    private width: number;
    private height: number;

    public set Width(width: number) {
        if (window.innerWidth >= width) {
            this.width = width;
        }
    }

    public set Height(height: number) {
        if (window.innerHeight >= height) {
            this.height = height;
        }
    }

    public get Width(): number {
        return this.width;
    }

    public get Height(): number {
        return this.height;
    }
}
