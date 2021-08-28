import express from 'express';
import { PostModel } from '../models/PostModel.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const posts = await PostModel.find();
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/home', (req, res) => {
    res.send('ahihi!');
});

export default router;