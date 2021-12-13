const express = require('express')

const app = express()
const port = process.env.PORT || 5000


//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname = 'public'))


app.set('views', './src/views')
app.set('view engine', 'ejs')

const mainApp = require('./src/route/app')


//Use app
app.use('/', mainApp)



app.listen(port, () => console.log('Listening on port ' + port))