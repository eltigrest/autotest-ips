import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    name: string,
    bio: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
    }
}

export {
    UserModel,
    createUserModel,
}