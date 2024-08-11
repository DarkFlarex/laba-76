import express from "express";
import fileDb from "../fileDb";
import {MessageMutation} from "../types";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req,res)=>{
    const messages = await fileDb.getItems();
    const queryDate = req.query.datetime as string;

    if (queryDate) {
        const date = new Date(queryDate);
        if (isNaN(date.getTime())) {
            return res.status(400).send({ error: 'The date is incorrect' });
        }
        const newMessages = messages.filter(message => new Date(message.datetime) > date);
        return res.send(newMessages);
    }
    res.send(messages.slice(-30));
});

messagesRouter.post('/', async (req, res)=>{
    if(!req.body.author || !req.body.message){
        return res.status(400).send({error: 'Author and message must be present in the request'});
    }
    const message: MessageMutation = {
        author: req.body.author,
        message:req.body.message,
    };

    const savedMessage = await fileDb.addItem(message);

    res.send(savedMessage);
});

export default messagesRouter;