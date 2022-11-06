import { CreateUser, FindUser } from "../posts.js"

export const userRegist = async (req, res) => {
    const registData = req.body
    try {
        if (registData.name != "" && registData.phone != "" && registData.email != "" && registData.password != "") {
            let s1 = await CreateUser(registData)
            res.send({
                code: "200",
                message: "注册成功!",
                data: s1,
            })

        }
        else {
            res.send({
                code: "500",
                message: "信息填写不全!",
                data: null,
            })
        }
    } catch (err) {
        res.send({
            code: "500",
            message: "注册失败!",
            data: null,
        })
    }
}

export const userLogin = async (req, res) => {
    const loginData = req.body
    try {
        let s2 = await FindUser(loginData)
        if (!s2[0]) {
            res.send({
                code: "500",
                message: "账号错误!",
                data: null,
            })
        }
        else {
            if (s2[0].password == loginData.password) {

                //向session中传入状态
                req.session.account = s2[0].id
                req.session.login = true
                res.send({
                    code: "200",
                    message: "登录成功!",
                    session: req.session,
                })
            }
            else {
                res.send({
                    code: "500",
                    message: "密码错误!",
                    data: null,

                })
                req.session.account = null
                req.session.login = false
            }
        }

    } catch (err) {
        console.log(err);
        res.send({
            code: "500",
            message: "登录失败!",
            data: null,
        })
        req.session.account = null
        req.session.login = false
    }
}
