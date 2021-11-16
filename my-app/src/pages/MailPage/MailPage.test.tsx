import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import {MailPage, MainPageProps} from './MailPage';
import Adapter from 'enzyme-adapter-react-16';
import {LettersProps} from '../../components/manyLetters/Letters';
import {DeleteButtonProps}
    from '../../components/Buttons/DeleteButton/DeleteButton';

configure({adapter: new Adapter(), disableLifecycleMethods: false});

const testData: MainPageProps = {
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
            'snippet': 'Шесть месяцев я не мог спать. ' +
                'Когда у тебя бессонница — всё нереально; ' +
                'всё очень далеко от тебя, всё это — копия, ' +
                'снятая с копии, которая в свою очередь снята с копии.',
        },
        {
            'id': 3,
            'avatar': 'http://i.pravatar.cc/300?u=3',
            'sender': 'Хемнэс',
            'theme': 'New Jersey Devils',
            'snippet': 'Когда-то мы зачитывались ' +
                'порнографией — теперь каталогами IKEA.',
        }],
};

describe('test mail page', () => {
    it('test data snapshot match', () => {
        const wrapper: ShallowWrapper = shallow(<MailPage {...testData} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('delete one letters test', () => {
        const wrapper: ShallowWrapper = shallow(<MailPage {...testData} />);

        const LettersProps = wrapper.find('Letters').props() as LettersProps;
        LettersProps.selectHandler(1);

        expect(
            (wrapper.find('Letters').props() as LettersProps)
                .letters
                .filter((letter) => letter.isSelected)
                .length,
        ).toBe(1);

        const DeleteButtonProps = wrapper
            .find('DeleteButton').props() as DeleteButtonProps;
        DeleteButtonProps.clickHandler();

        expect(
            (wrapper.find('Letters').props() as LettersProps)
                .letters
                .length,
        ).toBe(testData.emails.length - 1);
    });

    // TODO: Проблема в том, что тест не дожидается ререндера компонента
    //  и expect срабатывает быстрее, чем useEffect
    // it('select all test', () => {
    //     const wrapper: ShallowWrapper = shallow(<MailPage {...testData} />,)
    //
    //     const SelectCheckboxProps = wrapper
    //     .find('SelectCheckbox')
    //     .props() as SelectCheckboxProps;
    //     SelectCheckboxProps.checkHandler();
    //
    //     expect(
    //         (wrapper.find('Letters').props() as LettersProps)
    //             .letters
    //             .filter(letter => letter.isSelected)
    //             .length
    //     ).toBe(testData.emails.length);
    // });
});
