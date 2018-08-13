import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SummaryChange from './SummaryChange';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryChange ::', () => {
    it('should render with no change', () => {
        const component = shallow(<SummaryChange />);

        let html = component.html();

        expect(html).toBe('<div><span>Change:</span><span class="glyphicon glyphicon-minus icon-no-change" style="padding-left:5px;padding-right:5px" aria-hidden="true"></span><span>N/A</span></div>');
    });

    it('should render with change', () => {
        const component = shallow(<SummaryChange percentageChange={5} />);;

        let html = component.html();

        expect(html).toBe('<div><span>Change:</span><span class="glyphicon glyphicon-arrow-up icon-increase" style="padding-left:5px;padding-right:5px" aria-hidden="true"></span><span>5%</span></div>');
   });
});