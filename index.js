const express = require("express")
const routes = require("./routes")
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes)

app.use('/assets', express.static('assets'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.listen(port, () => {
    console.log(`this app listen to you in port ${port}`)
})