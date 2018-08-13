import React from 'react';
import renderer from 'react-test-renderer';
import Decrease from './Decrease';

describe('Decrease ::', () => {
    it('should render with correct class', () => {
        const component = renderer.create(<Decrease />);;

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('glyphicon glyphicon-arrow-down icon-decrease');
    });
});