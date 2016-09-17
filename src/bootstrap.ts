import MyCanvas from './MyCanvas';
import TextElement from './TextElement';
import { Position } from './Position';
import ButtonElement from './ButtonElement';

// Initialize canvas.
let surface: HTMLCanvasElement = document.getElementById('drawing_area') as HTMLCanvasElement;
let canvas = new MyCanvas(surface);
canvas.Draw('images/header_1.jpg');

/// Register add header
document.getElementById('add-header').addEventListener('click', (e)=>{
    let header = new TextElement('Header', '30px Georgia', '#eee', Position.TOP_LEFT);
    canvas.AddText(header);
});

// Register add Teaser
document.getElementById('add-teaser').addEventListener('click', (e)=>{

    let teaser = new TextElement(
        'This will be the valuable massage to the audience.',
         '20px Georgia',
          '#eee', 
          Position.MIDDLE_CENTER);

    canvas.AddText(teaser);
});

// Register add Button
document.getElementById('add-button').addEventListener('click', (e)=>{
    let button = new ButtonElement('Visit', '10px Georgia', '#eee', Position.BOTTOM_RIGHT);
    canvas.AddText(button);
});
