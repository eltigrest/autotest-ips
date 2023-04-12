// Кейс - логинация без login
import { LoginPage } from '../page-object/login.page'
import { MainPage } from '../page-object/main.page'
import { UserModel, createUserModel } from '../model/user.model'
import { UserData, userData } from '../data/user.data'
//import { Reporter } from '../common/reporter/Reporter'
//import { LOGIN, EMAIL, PASSWORD } from '../../credential'

const WRONGPASSWORD = '2345'

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

    it('User should not be log in without Username', async () => {            //негативный с логинацией с пустым логином
        
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(' ')           //пусто 
        await browser.$('//*[@id="password"]').setValue(user.password)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()

        expect(await (await browser.$('//*[@class="js-flash-alert"]')).isDisplayed()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

})




//        await loginPage.login(LOGIN, PASSWORD)