const express = require('express')
const path = require('path')
const port = 3000
const morgan = require('morgan')
var handlebars  = require('express-handlebars')

const app = express()

//Static file
app.use(express.static(path.join(__dirname, 'public')))

//Template engine
app.engine('hbs', handlebars({
    extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//HTTP logger
app.use(morgan('combined', {
    skip: function (req, res) { return res.statusCode < 400 }
}))

//route
app.get('/', (req, res) => res.render('home'))

app.get('/news', (req, res) => res.render('news'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})