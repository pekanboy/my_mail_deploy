import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import {App} from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testData = {
    emails: [
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
            'snippet': 'Шесть месяцев я не мог спать.' +
                ' Когда у тебя бессонница — всё нереально;' +
                ' всё очень далеко от тебя, всё это — копия,' +
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

jest.mock('../../data/data.json', ()=>({
    emails: testData.emails,
}), {virtual: true});

describe('test app', () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    it('test data snapshot match', () => {
        const wrapper: ShallowWrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});
