import MyCanvas from './MyCanvas';
import TextElement from './TextElement';
import { Position } from './Position';
import ButtonElement from './ButtonElement';
import UIUtils from './UIUtils';
import FormContent from './FormContent';

// Initialize canvas.
let surface: HTMLCanvasElement = document.getElementById('drawing_area') as HTMLCanvasElement;
let canvas = new MyCanvas(surface);
canvas.Draw('images/header_1.jpg');

/// Register add header
document.getElementById('add-header').addEventListener('click', (e)=>{
    let header = new TextElement('Header', '30pt Arial', '#eee', Position.TOP_LEFT);
    canvas.AddText(header);
});

// Register add Teaser
document.getElementById('add-teaser').addEventListener('click', (e)=>{

    let teaser = new TextElement(
        'This will be the valuable massage to the audience.',
         '30pt Calibri',
          'white', 
          Position.MIDDLE_CENTER);

    canvas.AddText(teaser);
});

// Register add Button
document.getElementById('add-button').addEventListener('click', (e)=>{
    //let button = new ButtonElement('Visit', '10pt Georgia', '#eee', Position.BOTTOM_RIGHT);
    //canvas.AddText(button);
    UIUtils.ShowDialog('Button', FormContent.ButtonForm);
});
