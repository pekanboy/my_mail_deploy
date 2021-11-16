import React from 'react';
import styles from './Letter.module.css';
import {ILetter} from '../../interfaces/ILetter';

export interface LetterProps {
    letter: ILetter
    checkHandler: (id: number) => void
}

export const Letter: React.FC<LetterProps> = ({checkHandler, letter}) => {
    return (
        <div
            className={`${styles.container} 
                ${letter.isSelected && styles.selected}`}
            id={letter.id.toString()}>
            <input
                className={styles.checkbox}
                type="checkbox"
                onChange={() => {
                    checkHandler(letter.id);
                }
                }
                checked={!!letter.isSelected}/>
            <img
                className={styles.avatar}
                src={letter.avatar}
                alt="Аватар пользователя"/>
            <span className={styles.name}>{letter.sender}</span>
            <span className={styles.theme}>{letter.theme}</span>
            <span className={styles.snippet}>{letter.snippet}</span>
        </div>
    );
};
