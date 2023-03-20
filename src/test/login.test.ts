import { LoginPage } from '../page-object/login.page'
import { LOGIN, EMAIL, PASSWORD } from '../../credential'
import { MainPage } from '../page-object/main.page'

const WRONGPASSWORD = '2345'

describe('Login form', () => {
    let loginPage: LoginPage
    let mainPage: MainPage

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('the user should log in', async () => {
        await loginPage.login(LOGIN, PASSWORD)

        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

})