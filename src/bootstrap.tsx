import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyPageComponent } from './components/MyPageComponent';
import { Store, createStore } from 'redux';
import { dialog } from './store/store';
import { updateHeader, updateTeaser } from './store/Actions';
import { Position } from './enums/Position';

const store = createStore(dialog);

// Initialize page.
const render = () =>
    ReactDOM.render(<MyPageComponent background='images/header_1.jpg' />,
                    document.getElementById('container'));
render();
let unsubscribe = store.subscribe(render);

store.dispatch(updateHeader({color: '#fff', font: 20, position : Position.TOP_LEFT, value : 'Header'}));
store.dispatch(updateTeaser({color: '#fff', font: 20, position : Position.TOP_LEFT, value : 'Teaser'}));
store.dispatch(updateTeaser({color: '#fff', font: 20, position : Position.TOP_LEFT, value : 'Button'}));

unsubscribe();