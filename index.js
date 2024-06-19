const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid(); 

}

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'mike',
        comment: 'I love tacos'
    },
    {
        id:uuid(),
        username: 'bob',
        comment: 'I love burritos'
    },
    {
        id: uuid(),
        username: 'joe',
        comment: 'I love sushi'
    },
    {
        id: uuid(),
        username: 'james',
        comment: 'I love biryani'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    console.log(req.body);
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
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

