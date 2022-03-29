import express from 'express'
import next from 'next'

// server
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handler = app.getRequestHandler()
const server = express()

app.prepare()
    .then(() => {
        server.use(
            express.static('public'))

        server.all('*', (req, res) => {
            return handler(req, res)
        })

        server.listen(3000, () => {
            console.debug(`> Ready on http://localhost:3000`)
        })
    })
    .catch(() => {
        console.error()
        process.exit(1)
    })
