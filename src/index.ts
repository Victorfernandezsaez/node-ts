import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import coockieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from 'mongoose';
import router from './router';


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(coockieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

const MONGO_URL = 'mongodb+srv://victor:boWq8AnVx3y6Xe66@node-ts.hiw9urr.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => {
    console.log(error);
});


app.use('/', router());