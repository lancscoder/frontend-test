import React from 'react';
import renderer from 'react-test-renderer';
import Increase from './Increase';

describe('Increase ::', () => {
    it('should render with correct class', () => {
        const component = renderer.create(<Increase />);;

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('glyphicon glyphicon-arrow-up icon-increase');
    });
});