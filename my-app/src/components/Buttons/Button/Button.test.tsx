import React, {CSSProperties} from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import {Button, ButtonProps} from './Button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testData: ButtonProps = {
    avatar: 'http://i.pravatar.cc/300?u=1',
    text: 'Button',
    clickHandler: () => undefined,
    styles: {
        backgroundColor: 'red',
    } as CSSProperties,
};

describe('Test button component', () => {
    it('to match snapshot ', function() {
        const wrapper: ShallowWrapper = shallow(<Button {...testData} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('test callback called', () => {
        const mockClick = jest.fn();
        const data: ButtonProps = {...testData, clickHandler: mockClick};

        const wrapper: ShallowWrapper = shallow(<Button {...data} />);

        wrapper.find('div.container').at(0).simulate('click', {});

        expect(mockClick.mock.calls.length).toBe(1);
    });
});
