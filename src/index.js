const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
// const cors = require('cors')


const app = express()
const port = process.env.PORT

//Middleware
// app.use((req,res,next) => {
//     if(req.method === "GET") {
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Currently in Maintainence mode. Please comeback later')
// })

const multer = require('multer')
const upload = multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx|pdf)$/)) {
            return cb(new Error('please upload a Word document'))
        }

        cb(undefined,true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})



app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})


app.use(express.json())
// app.use(cors())
app.use(userRouter)
app.use(taskRouter)



 
app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})

