import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import {Letters, LettersProps} from './Letters';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testData: LettersProps = {
    selectHandler: () => undefined,
    letters: [
        {
            'id': 1,
            'avatar': 'http://i.pravatar.cc/300?u=1',
            'sender': 'Бединге',
            'theme': 'Carolina Hurricanes',
            'snippet': 'Люди всё время меня спрашивают: ' +
                'знаю ли я Тайлера Дёрдена?',
        },
        {
            'id': 2,
            'avatar': 'http://i.pravatar.cc/300?u=2',
            'sender': 'Лиаторп',
            'theme': 'Columbus Blue Jackets',
            'snippet': 'Шесть месяцев я не мог спать. ' +
                'Когда у тебя бессонница — всё нереально; ' +
                'всё очень далеко от тебя, всё это — копия,' +
                ' снятая с копии, которая в свою очередь снята с копии.',
        },
        {
            'id': 3,
            'avatar': 'http://i.pravatar.cc/300?u=3',
            'sender': 'Хемнэс',
            'theme': 'New Jersey Devils',
            'snippet': 'Когда-то мы зачитывались порнографией' +
                ' — теперь каталогами IKEA.',
        }],
};

describe('test Letters block', () => {
    it('letters count no zero', function() {
        const wrapper: ShallowWrapper = shallow(<Letters {...testData} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('letters count zero', function() {
        const data: LettersProps = {...testData, letters: []};
        const wrapper: ShallowWrapper = shallow(<Letters {...data} />);

        expect(wrapper).toMatchSnapshot();
    });
});
