describe('test describe', () => {
    it('test it', async () => {
        async function open() {
            const t: number = 1
            await browser.url(`http://google.com`)
        }

        await open()      
        await browser.pause(5000)
    })
})
