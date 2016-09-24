import { counter } from '../src/store/store';
import { createStore , Action, Store} from 'redux';

describe('reducers', () => {
    describe('counter', () => {
        let store: Store<number>;

        beforeEach(() => {
            // Create a Redux store holding the state of your app.
            // Its API is { subscribe, dispatch, getState }.
            store = createStore(counter);

            // You can use subscribe() to update the UI in response to state changes.
            // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
            // However it can also be handy to persist the current state in the localStorage.

            store.subscribe(() =>
                console.log(store.getState())
            );

        });

        it('should provide the initial state', () => {
            chai.assert.strictEqual(counter(undefined, { type: undefined }), 0);
        });

        it('should handle INCREMENT action', () => {
            chai.assert.strictEqual(counter(1, { type: 'INCREMENT' }), 2);
        });

        it('should handle DECREMENT action', () => {
            chai.assert.strictEqual(counter(1, { type: 'DECREMENT' }), 0);
        });

        it('should ignore unknown actions', () => {
            chai.assert.strictEqual(counter(1, { type: 'unknown' }), 1);
        });

        it('should update state', () => {
            // The only way to mutate the internal state is to dispatch an action.
            // The actions can be serialized, logged or stored and later replayed.
            store.dispatch({ type: 'INCREMENT' });
            chai.assert.strictEqual(store.getState(), 1);
            // 1

            store.dispatch({ type: 'INCREMENT' });
            chai.assert.strictEqual(store.getState(), 2);
            // 2

            store.dispatch({ type: 'DECREMENT' });
            chai.assert.strictEqual(store.getState(), 1);
            // 1
        });
    });
});