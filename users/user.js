import express from "express"
const userRouter = express.Router()
import { userRegist, userLogin } from "./userFun.js"

userRouter.post('/regist', userRegist)
userRouter.post('/login', userLogin)

export { userRouter }