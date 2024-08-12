import MessageForm from "../components/MessageForm";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectMessageCreating} from "../store/messagesSlice";
import {createMessage} from "../store/messagesThunks";
import {MessageMutation} from "../../../types";

const Message = () => {
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectMessageCreating)

    const onFormSubmit = async (messageMutation:MessageMutation) =>{
        await dispatch(createMessage(messageMutation));
    };

    return (
        <MessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>
    );
};

export default Message;