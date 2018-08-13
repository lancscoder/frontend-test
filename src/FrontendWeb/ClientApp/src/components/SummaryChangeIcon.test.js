import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SummaryChangeIcon from './SummaryChangeIcon';

import Increase from './Increase';
import Decrease from './Decrease';
import NoChange from './NoChange';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryChangeIcon ::', () => {
    it('should render increase', () => {
        const component = shallow(<SummaryChangeIcon percentageChange={5} />);

        expect(component.find(Increase).length).toBe(1);
    });

    it('should render increase', () => {
        const component = shallow(<SummaryChangeIcon percentageChange={-5} />);

        expect(component.find(Decrease).length).toBe(1);
   });

   it('should render no change', () => {
       const component = shallow(<SummaryChangeIcon percentageChange={0} />);

       expect(component.find(NoChange).length).toBe(1);
  });
});