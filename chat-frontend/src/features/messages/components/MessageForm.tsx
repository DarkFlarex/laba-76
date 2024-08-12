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
        setState({
            author: '',
            message: '',
        });
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=event.target;
        setState(prevState =>({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <Grid container component="form" onSubmit={submitForHandler}
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                width: '40%',
                marginX: 'auto',
                padding: 2,
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                background: 'lightskyblue',
                borderRadius: '5px',
            }}
        >
            <Grid container direction="column" sx={{ width: '85%', mb:2,}}>
                <Grid item>
                    <TextField
                        required
                        label="Author"
                        id="author"
                        name="author"
                        value={state.author}
                        onChange={inputChangeHandler}
                        sx={{
                            mb:2,
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        multiline
                        minRows={2}
                        label="Message"
                        id="message"
                        name="message"
                        value={state.message}
                        onChange={inputChangeHandler}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <LoadingButton
                    type="submit"
                    loading={isLoading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                    sx={{
                        padding: '10px 20px',
                    }}
                >
                    <span>Add</span>
                </LoadingButton>
            </Grid>
        </Grid>
    );
};

export default MessageForm;