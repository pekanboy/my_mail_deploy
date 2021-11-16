import React, {CSSProperties} from 'react';
import deleteImg from '../../../static/delete.svg';
import {Button} from '../Button/Button';

export interface DeleteButtonProps {
    clickHandler: () => void
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({clickHandler}) => {
    const styles: CSSProperties = {
        borderLeftWidth: 0,
        borderRadius: '0 4px 4px 0',
    };

    return (
        <div>
            <Button
                avatar={deleteImg}
                clickHandler={clickHandler}
                text={'Delete'}
                styles={styles}
            />
        </div>
    );
};
