import express, { Application } from "express";
import cors from 'cors'
import multer from 'multer'
import path from 'path'

const app: Application = express()

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, ".", "uploads"))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname)
    },
})

const upload = multer({storage})

app.post('/', upload.array('file'), (req, res) => {
    try {
        return res.status(200).json({status: true, message: "Upload succeded!"})
    } catch(e: any) {
        return res.status(500).json({status: false, message: e.message})
    }
})

const port = 3001

app.listen(port, () => console.log(`Server running on port ${port}`))