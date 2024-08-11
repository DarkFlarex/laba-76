import {promises as fs} from 'fs';
import {IMessage, MessageMutation} from "./types";
import {randomUUID} from "crypto";

const  fileName = './db.json';
let data: IMessage[] = [];

const fileDb = {
    async init (){
        try {
            const  fileContents  = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        }catch (e){
            data=[];
        }
    },
    async getItems (){
        return data;
    },
    async addItem(item: MessageMutation){
        const datetime = new Date().toISOString();
        const message: IMessage = {
            id:randomUUID(),
            ...item,
            datetime
        };
        data.push(message);
        await this.save();
        return message;
    },
    async save(){
        await fs.writeFile(fileName,JSON.stringify(data, null, 2));
    }
};

export default fileDb;
