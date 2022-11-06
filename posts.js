import { db } from "./utils/db.js"

export const CreateUser = async (Udata) => {
    let s1 = await db.user.create({
        data: {
            name: Udata.name,
            phone: Udata.phone,
            email: Udata.email,
            password: Udata.password,
        },
    })
    return s1
}

export const FindUser = async (Udata) => {
    let s2 = await db.user.findMany({
        where: {
            OR: [
                {
                    phone: Udata.account,
                },
                {
                    email: Udata.account,
                }
            ]
        },
    })
    return s2
}