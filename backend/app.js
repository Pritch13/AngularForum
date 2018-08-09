const express = require('express');
const app = express();

app.use('/api/posts', (req,res, next)=> {
    posts = [{
        id: 234234,
        title: 'test',
        content: 'test'
    },
    {
        id: 234234,
        title: 'test',
        content: 'test'
    }]
    res.json(posts);
});

module.exports = app;