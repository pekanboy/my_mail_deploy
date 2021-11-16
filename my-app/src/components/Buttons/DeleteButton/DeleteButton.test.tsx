import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DeleteButton, DeleteButtonProps} from './DeleteButton';

configure({adapter: new Adapter()});

const testData: DeleteButtonProps = {
    clickHandler: () => undefined,
};


describe('Test delete button component', () => {
    it('to match snapshot ', function() {
        const wrapper: ShallowWrapper = shallow(<DeleteButton {...testData} />);

        expect(wrapper).toMatchSnapshot();
    });
});
