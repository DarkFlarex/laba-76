import MessageForm from "../components/MessageForm";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectMessageCreating, selectMessages, selectMessagesFetching} from "../store/messagesSlice";
import {createMessage, fetchMessages} from "../store/messagesThunks";
import {MessageMutation} from "../../../types";
import {useEffect} from "react";
import MessageItem from "../components/MessageItem";
import {CircularProgress,Grid} from "@mui/material";

const Message = () => {
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectMessageCreating)
    const messages = useAppSelector(selectMessages);
    const isFetching = useAppSelector(selectMessagesFetching);

    useEffect(() => {
        dispatch(fetchMessages());

        const interval = setInterval(() => {
            dispatch(fetchMessages());
        }, 3000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const onFormSubmit = async (messageMutation:MessageMutation) =>{
        await dispatch(createMessage(messageMutation));
    };

    return (
        <>
            <MessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>

            <Grid container direction="column" spacing={2}
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: '200px' }}
            >
                {isFetching && <Grid item> <CircularProgress/> </Grid>}
                {messages.map(message => (
                    <MessageItem
                        key={message.id}
                        messages={message}
                    />
                ))}
            </Grid>

        </>
    );
};

export default Message;