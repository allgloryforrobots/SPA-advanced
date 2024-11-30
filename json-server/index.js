const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(require('express').json())

// имитация api
server.use(async(req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})


// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
    if (req.url === '/login') {
        return next()
    }

    console.log(req.headers)

    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR MIDDLEWARE' })
    }
    return next()
})

server.post('/login', (req, res) => {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')), 'UTF-8')
    const { users } = db
    const userFromDb = users.find(
        (user) => user.username === username && user.password === password
    )

    if (userFromDb) {
        console.log(userFromDb)
        return res.status(200).json(userFromDb)
    }

    return res.status(403).json({ message: ' AUTH ERROR' })
})

server.use(jsonServer.defaults())
server.use(router)

server.listen(8000, () => {
    console.log('server is running 8000 port')
})











