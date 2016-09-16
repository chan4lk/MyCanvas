import MyCanvas from './MyCanvas';
import TextElement from './TextElement';
import { Position } from './Position';

let surface: HTMLCanvasElement = document.getElementById('drawing_area') as HTMLCanvasElement;
let canvas = new MyCanvas(surface);
canvas.Draw();

/// add header
let header = new TextElement('Header', '20px Georgia', '#eee', Position.TOP_CENTER);
canvas.AddHeader(header);

