import { TextElement } from '../entities/TextElement';
import { IAction } from './IAction';

export const UPDATE_HEADER = 'UPDATE_HEADER';
export const UPDATE_TEASER = 'UPDATE_TEASER';
export const UPDATE_BUTTON = 'UPDATE_BUTTON';
export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND';
export const RESIZE = 'RESIZE';
export const CLEAR = 'CLEAR';
export const UNDO = 'UNDO';

export function updateHeader(text: TextElement): IAction<string> {
    return { type: UPDATE_HEADER, payload: JSON.stringify(text) };
}

export function updateTeaser(text: TextElement): IAction<string> {
    return { type: UPDATE_TEASER, payload: JSON.stringify(text) };
}

export function updateButton(text: TextElement) {
    return { type: UPDATE_BUTTON, payload: JSON.stringify(text) };
}

export function updateBackground(url: string): IAction<string> {
    return { type: UPDATE_BACKGROUND, payload: JSON.stringify(url) };
}