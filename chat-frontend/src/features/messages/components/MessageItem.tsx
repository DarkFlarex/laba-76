import React from 'react';
import {Message} from "../../../types";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import dayjs from 'dayjs';

interface Props{
    messages:Message;
}


const MessageItem: React.FC<Props> = ({messages}) => {
    return (
        <Grid item sx={{width:'300px',mb:3}}>
            <Card>
                <CardHeader title={messages.author}
                sx={{
                    textAlign: 'left',
                    padding: '8px 16px',
                    fontSize: '20px'
                }}

                />
                <CardContent
                 sx={{
                     padding: '8px 16px',
                 }}
                >
                    <Typography sx={{padding: '8px 16px', fontSize: '20px',}}>
                      {messages.message}
                    </Typography>
                    <Typography sx={{textAlign: 'right'}}>
                     {dayjs(messages.datetime).format('DD.MM.YYYY HH:mm')}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MessageItem;