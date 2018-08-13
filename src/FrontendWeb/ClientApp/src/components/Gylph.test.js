import React from 'react';
import renderer from 'react-test-renderer';
import Glyph from './Glyph';

describe('Glyph ::', () => {
    it('should render with correct class', () => {
        const component = renderer.create(<Glyph name="test" />);;

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('test');
    });
});