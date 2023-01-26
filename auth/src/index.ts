import express from 'express'
import { currentuserRouter } from './routes/current-user'
import { signoutRouter } from './routes/signout'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'

const app = express()
app.use(express.json())

app.use(currentuserRouter)


app.listen(3000, () => {
    console.log('Listening on port 3000!')
})