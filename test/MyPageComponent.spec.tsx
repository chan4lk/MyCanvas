import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { MyPageComponent, IMyPageProps } from '../src/MyPageComponent';

describe('My Page Component', () => {
    let renderer: React.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<MyPageComponent background='../images/header_1.jpg' />);
    });

    it('should render correctly', () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, 'div');
    });

    it('should have correct prop values', () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props;
        chai.assert.strictEqual(propValues.className, 'ms-Grid');
    });
});