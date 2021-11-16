import React from 'react';
import {ILetter} from '../../interfaces/ILetter';
import {Letter} from '../Letter/Letter';
import styles from './Letters.module.css';

export interface LettersProps {
    letters: ILetter[]
    selectHandler: (id :number) => void
}

export const Letters: React.FC<LettersProps> = ({letters, selectHandler}) => {
    if (!letters.length) {
        return (
            <div className={styles.zero}>
                У вас нет входящих писем
            </div>
        );
    }

    return (
        <div className={styles.letters}>
            {
                letters?.map((letter) => {
                    return (
                        <Letter
                            key={letter.id.toString()}
                            letter={letter}
                            checkHandler={selectHandler}
                        />
                    );
                },
                )}
        </div>
    );
};
