/**
 * Container for the canvas.
 * 
 * @export
 * @class Container
 */
export class Container {
    private width: number;
    private height: number;

    public set Width(width: number) {
        if (window.innerWidth >= width) {
            this.width = width;
        } else {
            this.width = window.innerWidth;
        }
    }

    public set Height(height: number) {
        if (window.innerHeight >= height) {
            this.height = height;
        } else {
            this.height = window.innerHeight;
        }
    }

    public get Width(): number {
        return this.width;
    }

    public get Height(): number {
        return this.height;
    }
}
