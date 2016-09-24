import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyPageComponent } from './components/MyPageComponent';
import { Store, createStore } from 'redux';
import { counter } from './store/store';

const store = createStore(counter);

// Initialize page.
const render = () =>
    ReactDOM.render(<MyPageComponent background='images/header_1.jpg' />,
                    document.getElementById('container'));
render();
store.subscribe(render);
