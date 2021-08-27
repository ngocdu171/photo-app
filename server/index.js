import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://BrotherD:conmemay7@cluster0.jabiy.mongodb.net/db_Blog?retryWrites=true&w=majority'

app.use(bodyParser.json({limit: '30mb'})); //giới hạn dung lượng từ client gửi lên
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('err', err);
});