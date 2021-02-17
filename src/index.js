const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 8000

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

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


 
app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async() => {
    // const task = await Task.findById('602cef2a3fcf701e5446b884')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('602ce960e6460327c01438c3')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()