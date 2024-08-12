import React, {useState} from "react";
import {Grid, TextField} from "@mui/material";
import {MessageMutation} from "../../../types";
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    onSubmit:(message:MessageMutation) => void;
    isLoading:boolean;
}

const MessageForm:React.FC<Props> = ({onSubmit, isLoading}) => {
 const [state,setState]=useState<MessageMutation>({
    author:'',
    message:'',
 });

    const submitForHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        onSubmit({...state});
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=event.target;
        setState(prevState =>({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <Grid container direction="column" spacing={2}
              component="form" onSubmit={submitForHandler}>
            <Grid item>
                <TextField
                    required
                    label="Author"
                    id="author"
                    name="author"
                    value={state.author}
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    multiline
                    minRows={3}
                    label="Message"
                    id="message"
                    name="message"
                    value={state.message}
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Grid item>
                <LoadingButton
                    type="submit"
                    loading={isLoading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                >
                    <span>Add</span>
                </LoadingButton>
            </Grid>
        </Grid>
    );
};

export default MessageForm;