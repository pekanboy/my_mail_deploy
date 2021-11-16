import React from 'react';
import styles from './SelectCheckbox.module.css';

export interface SelectCheckboxProps {
    checked: boolean
    checkHandler: () => void
}

export const SelectCheckbox: React.FC<SelectCheckboxProps> =
    ({checked, checkHandler}) => {
        return (
            <div className={styles.container} onClick={checkHandler}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={checked}/>
                <span className={styles.text}>Выбрать все</span>
            </div>
        );
    };
