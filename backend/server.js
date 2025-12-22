import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send(`
        <title>Social Media Backend</title>
        <h1>You're at the Social Media Backend</h1>
    `)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})