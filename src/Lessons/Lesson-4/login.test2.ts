// Кейс - логинация с неверным паролем
import { LoginPage } from '../page-object/login.page'
import { MainPage } from '../page-object/main.page'
import { UserModel, createUserModel } from '../model/user.model'
import { UserData, userData, getRandomName } from '../data/user.data'

describe('Login form', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    const user: UserModel = createUserModel(userData)

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('User should not be log in with wrong password', async () => {            //с неверным паролем
        user.password = getRandomName(12)  
        await loginPage.login(user)
        expect(await loginPage.isDisplayedErrorMessage()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

})




//        await loginPage.login(LOGIN, PASSWORD)