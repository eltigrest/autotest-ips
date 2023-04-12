import { ChainablePromiseElement } from 'webdriverio'
import { Reporter } from '../common/reporter/Reporter'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public getUserAvatarSrc() {
        return this.browser.$('//*[@class="avatar rounded-2 avatar-user"]')
 //       return document.getElementsByClassName('avatar rounded-2 avatar-user')
    }

    private getSetPictureButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="avatar-crop-form"]/div[2]/button')
    }

    public async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }

    private getInputFile(): ChainablePromiseElement <WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    public async uploadFile(filePath: string): Promise <void> {
        Reporter.addStep('Подождать отображения поля для загрузки фото')
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
            await this.showHiddenFileInput(this.browser)
        Reporter.addStep('Загрузка фото')
        const file: string = await this.browser.uploadFile(filePath)
            await this.getInputFile().setValue(file)
    }

    public async buttonSaveUploadFile(): Promise <void> {
        Reporter.addStep('Подождать отображение кнопки Установить новое изображение')
        await browser.$('//*[@id="avatar-crop-form"]/div[2]/button').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        Reporter.addStep('Клик по кнопке')
        await (await this.getSetPictureButton()).click()
        Reporter.addStep('Проверяем смену url загруженного фото')
    }
}

export {
    ProfilePage,  // используется в тесте
}

