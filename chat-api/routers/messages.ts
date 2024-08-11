import express, {query} from "express";
import fileDb from "../fileDb";
import {MessageMutation} from "../types";

const messagesRouter = express.Router();

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