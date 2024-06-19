const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'mike',
        comment: 'I love tacos'
    },
    {
        username: 'bob',
        comment: 'I love burritos'
    },
    {
        username: 'joe',
        comment: 'I love sushi'
    },
    {
        username: 'james',
        comment: 'I love biryani'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/tacos', (req, res) => {
    res.send('Get /tacos response')
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send('Post /tacos response')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

