import { Action } from 'redux';
import 'core-js/library/fn/object/assign';
import { TextElement } from '../entities/TextElement';

export interface IState {
  background: string;
  texts: Array<TextElement>;
}

const initialState: IState = {
  background: '',
  texts: []
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
    // return Object.assign({}, state, { });
    case 'DECREMENT':
      // return Object.assign({}, state, { });
      return state - 1;
    default:
      return state;
  }
}

function dialog(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_TEXT':
      return Object.assign({}, state, {text: 'chan'});
    default:
      return state;
  }
}


export { counter };