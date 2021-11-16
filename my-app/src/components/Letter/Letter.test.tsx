import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import {Letter, LetterProps} from './Letter';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testData: LetterProps = {
    checkHandler: () => undefined,
    letter: {
        'id': 1,
        'avatar': 'http://i.pravatar.cc/300?u=1',
        'sender': 'Бединге',
        'theme': 'Carolina Hurricanes',
        'snippet': 'Люди всё время меня спрашивают: знаю ли я Тайлера Дёрдена?',
        'isSelected': false,
    },
};


describe('Test Letter component', () => {
    it('to match snapshot ', function() {
        const wrapper: ShallowWrapper = shallow(<Letter {...testData} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('test callback called', () => {
        const mockClick = jest.fn();
        const data: LetterProps = {...testData, checkHandler: mockClick};

        const wrapper: ShallowWrapper = shallow(<Letter {...data} />);

        wrapper.find('input[type="checkbox"]').simulate('change', {});

        expect(mockClick.mock.calls.length).toBe(1);
    });

    it('test selected letter', () => {
        const data = testData;
        data.letter = {...data.letter, isSelected: true};
        const wrapper: ShallowWrapper = shallow(<Letter {...data} />);

        expect(wrapper).toMatchSnapshot();
    });
});
