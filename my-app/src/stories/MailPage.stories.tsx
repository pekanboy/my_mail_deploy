import React from 'react';
import {Meta, Story} from '@storybook/react';
import {MailPage, MainPageProps} from '../pages/MailPage/MailPage';
import {emails} from '../data/data.json';

export default {
    title: 'Pages/MailPage',
    component: MailPage,
} as Meta;

const Template: Story<MainPageProps> = (args) => <MailPage {...args} />;

export const MainPage = Template.bind({});
MainPage.args = {
    emails: emails,
} as MainPageProps;
