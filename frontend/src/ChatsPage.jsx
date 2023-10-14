import React from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
import { PROJECT_ID } from '../CONSTANTS';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        PROJECT_ID, 
        props.user.username, 
        props.user.secret)
    return (
        <div style = {{height: '100vh'}}>c
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
};
export default ChatsPage;
