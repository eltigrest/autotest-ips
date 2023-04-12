// Кейс - логинация с email 

import { LoginPage } from '../page-object/login.page'
import { MainPage } from '../page-object/main.page'
import { UserModel, createUserModel } from '../model/user.model'
import { UserData, userData } from '../data/user.data'
import { Reporter } from '../common/reporter/Reporter'
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

    it('User should be log in with email', async () => {            //логинация с email
        Reporter.addStep('Подождать отображения поля Login')
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        Reporter.addStep(`Ввести email ${user.email}`)
        await browser.$('//*[@id="login_field"]').setValue(user.email)           //вызываем у браузера экземпляр - поиск элемента/  it - это полный сценарий.
        Reporter.addStep(`Ввести email ${user.password}`)
        await browser.$('//*[@id="password"]').setValue(user.password)
        Reporter.addStep('Подождать отображение кнопки Login')
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        Reporter.addStep('Попытка логинации')
        await browser.$('//*[@type="submit"]').click()
        Reporter.addStep('Появление блока меню с login-ом и аватаром')
        await (await browser.$('//summary/*[contains(@class,"avatar")]')).waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await (await browser.$('//summary/*[contains(@class,"avatar")]')).click()   //экспект позволяет сравнивать 2 результата, без await
        Reporter.addStep(`Проверка логинации пользователем ${user.login}`)
        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(user.login.toLowerCase())
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

})




//        await loginPage.login(LOGIN, PASSWORD)