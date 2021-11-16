import React from 'react';
import {MailPage} from '../../pages/MailPage/MailPage';
import {emails} from '../../data/data.json';

export const App: React.FC = () => {
    return (
        <div className="App">
            <MailPage emails={emails}/>
        </div>
    );
};

export default App;
