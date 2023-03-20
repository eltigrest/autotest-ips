import { ChainablePromiseElement } from 'webdriverio'

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
        return this.browser.$('//*[@id="passsword"]')
    }

    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//input[@type="submit"]')
    }

    public async login(userEmail: string, userPassword: string): Promise<void> {
        await (await this.getLoginField()).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await (await this.getLoginField()).setValue(userEmail)
        await (await this.getPasswordField()).setValue(userPassword)
        await (await this.getLoginButton()).click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }
}

export {
    LoginPage,
}