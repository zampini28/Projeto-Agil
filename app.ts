import express from 'express';

const app = express()
const port = 3333

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})


app.listen(port, () => console.log(`Server running on port ${port}`))