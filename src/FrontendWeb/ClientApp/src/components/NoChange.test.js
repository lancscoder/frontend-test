import React from 'react';
import renderer from 'react-test-renderer';
import NoChange from './NoChange';

describe('NoChange ::', () => {
    it('should render with correct class', () => {
        const component = renderer.create(<NoChange />);;

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('glyphicon glyphicon-minus icon-no-change');
    });
});