import express from "express";
import messagesRouter from "./routers/messages";
import fileDb from "./fileDb";
import cors, {CorsOptions} from 'cors';

const app = express();
const port = 8000;

const whitelist = ['http://localhost:5174']
const corsOptions:CorsOptions = {
    origin:  (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/messages', messagesRouter);

const run = async ()=>{
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};

run().catch(console.error);


