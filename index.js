const path = require('path')
const express = require('express')
const userRouter = require('./routes/users.route')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// console.log(path.join(__dirname, '../../JavaScript/Weather App (JavaScript)'))

const staticPath = path.join(__dirname, '/views')

app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html')
})

app.use('/users', userRouter)

// app.get('/about', (req, res) => {
//   res.write('<h1>Welcome to my about<h1/>')
//   res.write('<h1>Welcome to my about again<h1/>')
//   res.status(200).send()
// })

// app.get('/address', (req, res) => {
//   res.write('<h1>Welcome to my address<h1/>')
//   res.status(200).send()
// })

// app.get('/address/:id([0-9.]+)/:name', (req, res) => {
//   const idFromParams = req.params.id
//   const nameFromParams = req.params.name
//   const idFromQuery = req.query.id
//   const numFromQuery = req.query.num
//   const ageFromQuery = req.query.age

//   res.json({
//     name: nameFromParams,
//     id: idFromParams,
//     queryId: idFromQuery,
//     queryNum: numFromQuery,
//     queryAge: ageFromQuery,
//   })
//   res.status(200).send()
// })

// app.get('/contact', (req, res) => {
//   res.status(200).json([
//     {
//       name: 'evan',
//       id: 12,
//     },
//   ])
// })

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'))
})

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Sever is dead',
  })
})

app.listen(8000, () => {
  console.log('Started localhost:8000')
})
