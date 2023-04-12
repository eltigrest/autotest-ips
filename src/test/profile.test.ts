import { LoginPage } from '../page-object/login.page'
import { MainPage } from '../page-object/main.page'
import { ProfilePage } from '../page-object/profile.page'
import { UserModel, createUserModel } from '../model/user.model'
import { UserData, userData, getRandomName } from '../data/user.data'
//import { LOGIN, EMAIL, PASSWORD } from '../../credential'

describe('Profile test', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    let profilePage: ProfilePage
    const user: UserModel = createUserModel(userData)
    const filePath = 'src/files/originalava.jpg'

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
        profilePage = new ProfilePage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(userData.login.toLowerCase())
        await browser.url('https://github.com/settings/profile')
    })

   // it('Upload photo should be removed from profile', async () => {              //5. + Удаление аватара пользователя
   //     //*[@id="settings-frame"]/div[2]/div[2]/dl/dd/div/details/details-menu/form/button
   //     await browser.pause(100)
  //  })   

    it('Photo should be uploaded in profile', async () => {              //6. + Замена на новый аватар пользователя
        let avatarSrc: string = await profilePage.getUserAvatarSrc().getAttribute('src')
      //  console.log (`${avatarSrc}`)
        await profilePage.uploadFile(filePath)
        await browser.pause(5000)
        await profilePage.buttonSaveUploadFile()
        expect(await profilePage.getUserAvatarSrc().getAttribute('src')).not.toEqual(avatarSrc)
    })

})


