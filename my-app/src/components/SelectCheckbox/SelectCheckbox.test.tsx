import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SelectCheckbox, SelectCheckboxProps} from './SelectCheckbox';

configure({adapter: new Adapter()});

const testData = {
    checked: false,
    checkHandler: () => undefined,
} as SelectCheckboxProps;

describe('Test select checkbox component', () => {
    it('to match snapshot ', function() {
        let wrapper: ShallowWrapper = shallow(<SelectCheckbox {...testData} />);
        expect(wrapper).toMatchSnapshot();

        const testDataChecked: SelectCheckboxProps = {
            ...testData,
            checked: true,
        };
        wrapper = shallow(<SelectCheckbox {...testDataChecked} />);
        expect(wrapper).toMatchSnapshot();
    });


    it('test callback called', () => {
        const mockClick = jest.fn();
        const data: SelectCheckboxProps = {
            ...testData,
            checkHandler: mockClick,
        };

        const wrapper: ShallowWrapper = shallow(<SelectCheckbox {...data} />);

        wrapper.find('div').at(0).simulate('click', {});

        expect(mockClick.mock.calls.length).toBe(1);
    });
});
