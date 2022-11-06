import express from "express"
import { userRouter } from "./users/user.js"
import session from "express-session";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'jiamizhifu',
    resave: false,
    saveUninitialized: true,
}))
app.use('/api/users', userRouter)


app.listen(80, () => {
    console.log('software running at http://127.0.0.1');
})