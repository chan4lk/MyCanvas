import { Action } from 'redux';
import * as ES6 from 'core-js/library/fn/object/assign';

import { TextElement } from '../entities/TextElement';
import { Position } from '../enums/Position';
import { UPDATE_BACKGROUND, UPDATE_HEADER, UPDATE_TEASER, UPDATE_BUTTON, RESIZE, CLEAR, UNDO } from './Actions';
import { IAction } from './IAction';


export interface IState {
  background: string;
  header: TextElement;
  teaser: TextElement;
  button: TextElement;
}

const initialState: IState = {
  background: '',
  header: { color: '#fff', font: 20, position: Position.TOP_CENTER, value: '' },
  teaser: { color: '#fff', font: 20, position: Position.TOP_CENTER, value: '' },
  button: { color: '#fff', font: 20, position: Position.TOP_CENTER, value: '' },
};

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action: Action) {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function dialog(state = initialState, action: IAction<string>) {
  action.payload && console.log(JSON.parse(action.payload));
  console.log(state);

  switch (action.type) {
    case UPDATE_HEADER:
      return Object.assign({}, state, { header: JSON.parse(action.payload) });
    case UPDATE_TEASER:
      return Object.assign({}, state, { teaser: JSON.parse(action.payload) });
    case UPDATE_HEADER:
      return Object.assign({}, state, { button: JSON.parse(action.payload) });
    case UPDATE_BACKGROUND:
      return Object.assign({}, state, { background: JSON.parse(action.payload) });
    case CLEAR:
      return Object.assign({}, state, { header: {}, teaser: {}, button: {} });
    default:
      return state;
  }
}


export { counter, dialog };