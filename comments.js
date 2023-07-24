// Create web server application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [{
    username: 'John',
    comment: 'Hello'
}, {
    username: 'Mary',
    comment: 'Hi'
}];
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/comments', (req, res) => res.json(comments));
app.post('/comments', (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    comments.push({
        username,
        comment
    });
    res.json({
        message: 'Add comment successfully',
        username,
        comment
    });
});
app.listen(port, () => console.log(`Server started on port ${port}`));