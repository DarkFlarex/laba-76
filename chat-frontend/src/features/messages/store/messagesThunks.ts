import {createAsyncThunk} from "@reduxjs/toolkit";
import {MessageMutation} from "../../../types";
import axiosApi from "../../../axiosApi";


export const createMessage = createAsyncThunk<void, MessageMutation>(
    'messages/create',
    async (MessageMutation) =>{
        await axiosApi.post('/messages',MessageMutation);
    }
);