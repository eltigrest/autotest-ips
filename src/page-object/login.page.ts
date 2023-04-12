import { ChainablePromiseElement } from 'webdriverio'
import { UserModel, createUserModel } from '../model/user.model'
import { Reporter } from '../common/reporter/Reporter'
//import allureReporter from '@wdio/allure-reporter'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getLoginField() {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPasswordField() {
        return this.browser.$('//*[@id="password"]')
    }

    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//input[@type="submit"]')
    }

    public async login(user: UserModel): Promise<void> {
        Reporter.addStep('Подождать отображения поля Login')
        await (await this.getLoginField()).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        Reporter.addStep(`Ввести логин ${user.login}`)
        await (await this.getLoginField()).setValue(user.login)
        Reporter.addStep(`Ввести пароль ${user.password}`)
        await (await this.getPasswordField()).setValue(user.password)
        Reporter.addStep('Подождать отображение кнопки Login')
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        Reporter.addStep('Клик по кнопке залогиниться')
        await (await this.getLoginButton()).click()
    }

    public isDisplayedErrorMessage() {
        return this.ErrorFieldMessage().isDisplayed()
    }

    private ErrorFieldMessage() {
        return this.browser.$('//*[@class="js-flash-alert"]')
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }
}

export {
    LoginPage,
}






//public async login(userEmail: string, userPassword: string): Promise<void> {
//    await (await this.getLoginField()).waitForDisplayed({
//        timeoutMsg: 'Login field was not displayed'
//    })
//    await (await this.getLoginField()).setValue(userEmail)
//    await (await this.getPasswordField()).setValue(userPassword)
//    await (await this.getLoginButton()).click()
//}