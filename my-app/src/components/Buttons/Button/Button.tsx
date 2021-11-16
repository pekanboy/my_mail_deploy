import styles from './Button.module.css';
import React, {CSSProperties} from 'react';

export interface ButtonProps {
    clickHandler: () => void
    styles?: CSSProperties
    avatar: string
    text: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div
            className={styles.container}
            style={props.styles}
            data-name='button'
            onClick={props.clickHandler}>
            <img
                className={styles.img}
                src={props.avatar}
                alt="Изображение корзины"/>
            <span className={styles.text}>{props.text}</span>
        </div>
    );
};
