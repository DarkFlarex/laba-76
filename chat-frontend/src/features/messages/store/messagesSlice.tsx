import {createSlice} from "@reduxjs/toolkit";
import {createMessage} from "./messagesThunks";


export interface MessagesState{
    isCreating:boolean;
}

const initialState: MessagesState = {
    isCreating: false,
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createMessage.pending,(state)=>{
            state.isCreating = true;
        }).addCase(createMessage.fulfilled,(state)=>{
            state.isCreating = false;
        }).addCase(createMessage.rejected,(state)=>{
            state.isCreating = false;
        });
    },
    selectors:{
        selectMessageCreating:(state)=> state.isCreating,
    }
})

export const messagesReducer = messagesSlice.reducer;

export const{
    selectMessageCreating,
} = messagesSlice.selectors;