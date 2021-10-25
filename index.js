
const express = require('express')
var cors = require('cors')
const { json } = require('express')
const app = express()

app.use(cors())
app.use(express.json())
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

const users = [
    { id: 0, name: "suchorita", email: "suchorita@gmail.com", phone: '012242' },
    { id: 1, name: "shabana", email: "shabana@gmail.com", phone: '012242' },
    { id: 2, name: "sonia", email: "sonia@gmail.com", phone: '012242' },
    { id: 3, name: "srabonti", email: "srabonti@gmail.com", phone: '012242' },
    { id: 4, name: "sabnur", email: "sabnur@gmail.com", phone: '012242' },
]


// use query paramater
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        res.send(searchResult)
    } else {
        res.send(users)
    }

})

// app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})

// dynamic api
app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id]
    res.send(user)
    // console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(['orange', 'mango', 'banana'])
})

app.get('/fruits/orange', (req, res) => {
    res.send('I love yammi orange')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})