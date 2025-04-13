const express = require('express');
const app = express();
const port = 3000;

// In-memory storage for simplicity (in a real app, you'd use a database)
let posts = [];

app.use(express.json());

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    const { content } = req.body;
    const newPost = { id: posts.length + 1, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meta-clone', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

app.post('/posts', async (req, res) => {
    const { content } = req.body;
    const newPost = new Post({ content });
    await newPost.save();
    res.status(201).json(newPost);
});
