
import { LOGIN, EMAIL, PASSWORD } from '../../credential'

const WRONGPASSWORD = '2345'

describe('Login form test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')    // если без await полностью браузер не откроется, по умолчанию 20сек ждет 
    })

    it('User should be log in', async () => {            //все title будут на английском 
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(LOGIN)           //вызываем у браузера экземпляр - поиск элемента/  it - это полный сценарий.
        await browser.$('//*[@id="password"]').setValue(PASSWORD)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()

        await (await browser.$('//summary/*[contains(@class,"avatar")]')).waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await (await browser.$('//summary/*[contains(@class,"avatar")]')).click()   //экспект позволяет сравнивать 2 результата, без await

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })

    it('User should not be log in with wrong password', async () => {            //с неверным паролем
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)           //вызываем у браузера экземпляр - поиск элемента/  it - это полный сценарий.
        await browser.$('//*[@id="password"]').setValue(WRONGPASSWORD)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()

        expect(await (await browser.$('//*[@class="js-flash-alert"]')).isDisplayed()).toEqual(true)
    })

    it('User should be log in with email', async () => {            //логинация с email
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)           //вызываем у браузера экземпляр - поиск элемента/  it - это полный сценарий.
        await browser.$('//*[@id="password"]').setValue(PASSWORD)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()

        await (await browser.$('//summary/*[contains(@class,"avatar")]')).waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await (await browser.$('//summary/*[contains(@class,"avatar")]')).click()   //экспект позволяет сравнивать 2 результата, без await

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })

    it('User should not be log in without Username', async () => {            //негативный с логинацией с пустым логином
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(' ')           //пусто 
        await browser.$('//*[@id="password"]').setValue(PASSWORD)

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

//*[@id="login_field"]
//*[@id="password"]
//*[@id="login"]/div[4]/form/div/input[11]   заменим на //*[@type="submit"]   или //*[@name="commit"]
// //summary/*[contains(@class,"avatar")]

//*[@class="css-truncte-target"]s