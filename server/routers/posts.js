import express from "express";
import { PostModel } from "../models/PostModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/home", async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost },
      updatePost,
      { new: true } //option new = true: de lay du lieu moi nhat sau khi cap nhat. ko co option nay se tu dong lau du lieu cu
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
