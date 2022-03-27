// const express = require('express')
// const app = express()
// const path = require('path')

// //console.log(__dirname)
// //console.log(path.join(__dirname, '../public'))
// //serve html, css, js file from another folder
// const staticPath = path.join(__dirname, '../public')
// //Buildin middleware
// app.use(express.static(staticPath))

// //route->url
// //callback->res, req
// //app.get(route, callback)
// app.get('/', (req, res) => {
//     res.send('Hello from express Js')
// })
// app.get('/about', (req, res) => {
//     res.send('Hello from express Js about')
// })
// app.get('/contact', (req, res) => {
//     res.send('Hello from express Js contact')
// })
// app.listen(9000, () => {
//     console.log('Listing the port at 9000')
// })