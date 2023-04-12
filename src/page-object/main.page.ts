import { ChainablePromiseElement } from 'webdriverio'
import { Reporter } from '../common/reporter/Reporter'

class MainPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary/img')
    }

    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//details-menu//strong')
    }

    public getUserLoginText(): Promise<string> {
        Reporter.addStep('Получаем Login пользователя')
        return this.getUserLogin().getText()
    }

    public async openUserMenu(): Promise<void> {
        Reporter.addStep('Проверяем доступность аватара')
        await this.getUserAvatar().waitForClickable({
            timeoutMsg: 'User avatar was not clickable'
        })
        await this.getUserAvatar().click()
    }
}

export {
    MainPage,
}