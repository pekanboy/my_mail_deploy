import React, {useCallback, useEffect, useState} from 'react';
import styles from './MailPage.module.css';
import {SelectCheckbox} from '../../components/SelectCheckbox/SelectCheckbox';
import {DeleteButton} from '../../components/Buttons/DeleteButton/DeleteButton';
import {ILetter} from '../../interfaces/ILetter';
import {Letters} from '../../components/manyLetters/Letters';

export interface MainPageProps {
    emails: ILetter[]
}

export const MailPage: React.FC<MainPageProps> = ({emails}) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
    const [letters, setLetters] = useState<ILetter[]>(emails);

    useEffect(() => {
        setLetters((prevLetters) => {
            return prevLetters.map((letter) => {
                letter.isSelected = isAllSelected;
                return letter;
            });
        });
    }, [isAllSelected]);

    const allCheckHandler = useCallback(() => {
        setIsAllSelected((prev) => !prev);
    }, []);

    const oneCheckHandler = useCallback((id: number) => {
        setLetters(letters.map((letter) => {
            if (letter.id !== id) {
                return letter;
            }

            letter.isSelected = !letter.isSelected;
            return letter;
        }));
    }, [letters]);

    const deleteHandler = useCallback(() => {
        setLetters((prevLetters) => {
            return prevLetters.filter((letter) => !letter.isSelected);
        });
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.crimson}>My</span>Mail
            </div>
            <div className={styles.nav}>
                <SelectCheckbox
                    checked={isAllSelected}
                    checkHandler={allCheckHandler}/>
                <DeleteButton
                    clickHandler={deleteHandler}/>
            </div>
            <Letters
                letters={letters}
                selectHandler={oneCheckHandler}/>
        </div>
    );
};
