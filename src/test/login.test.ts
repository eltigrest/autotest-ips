import { LoginPage } from '../page-object/login.page'
import { MainPage } from '../page-object/main.page'
import { UserModel, createUserModel } from '../model/user.model'
import { UserData, userData, getRandomName } from '../data/user.data'

describe('Login form', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    const user: UserModel = createUserModel(userData)
    const emptyString: string = ' '

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('The user should log in with Login', async () => {          //1. + Корректная логинация с использованием логина
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(userData.login.toLowerCase())
    })

    it('The user should log in with email', async () => {          //2. + Корректная логинация с использованием адреса почты
        user.login = user.email
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(userData.login.toLowerCase())
    })

    it('User should not be log in with empty login field', async () => {            //3. - Попытка логинации с пустым логином
        user.login = emptyString
        await loginPage.login(user)
        expect(await loginPage.isDisplayedErrorMessage()).toEqual(true)
    })

    it('User should not be log in with wrong password', async () => {            //4. - Попытка логинации с неверным паролем (генерация рандомной строки)
        user.login = userData.login
        user.password = getRandomName(12)
        await loginPage.login(user)
        expect(await loginPage.isDisplayedErrorMessage()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

})
