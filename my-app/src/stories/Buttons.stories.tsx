import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, ButtonProps} from '../components/Buttons/Button/Button';
import deleteImg from '../static/delete.svg';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {clickHandler: {action: 'onClick'}},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DeleteButton = Template.bind({});
DeleteButton.args = {
    text: 'Delete',
    avatar: deleteImg,
} as ButtonProps;
