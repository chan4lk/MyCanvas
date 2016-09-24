import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { DialogComponent } from '../src/components/DialogComponent';
import { IUpdates } from '../src/entities/IUpdates';
import { Position } from '../src/enums/Position';


describe('Dialog Component', () => {
    let renderer: React.ShallowRenderer;

    beforeEach(() => {
        const update: IUpdates = {
            color: '#eee',
            fontSize: 20,
            position: Position.BOTTOM_CENTER,
            value: 'Chan'
        };

        renderer = TestUtils.createRenderer();
        renderer.render(<DialogComponent heading='Hi' formProps={update} />);
    });

    it('should render correctly', () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, 'div');
    });

    it('should have correct prop values', () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props;
        chai.assert.strictEqual(propValues.className, 'ms-Dialog');
    });
});