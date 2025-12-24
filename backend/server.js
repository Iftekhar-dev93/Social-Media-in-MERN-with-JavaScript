import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './configs/db.config.js'

dotenv.config()

connectDB()

const app = express()

const port = process.env.PORT || 8080

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true}))

app.get('/', (req, res) => {
    res.send(`
        <title>Social Media Backend</title>
        <h1>You're at the Social Media Backend</h1>
    `)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})