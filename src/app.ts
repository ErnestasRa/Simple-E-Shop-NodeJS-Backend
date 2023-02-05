import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import mainRouter from './routes/router.js';
const app = express();
dotenv.config()
const MONGO_DB = process.env.MONGOOSE_CONNECTION

mongoose
    .connect(
        MONGO_DB
    )
    .then(() => {
        console.log("connected OK");
    })
    .catch((e) => {
        console.log("ERROR");
    });

app.use(
    session({
        secret: "aoElak161AvsA",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.use(express.json());

app.listen(4000);

app.use("/", mainRouter);
