const pageScraper = require('./pageScraper');
const state = require('./state');

async function pageController(b){
    const browser = await b;
    // await start(browser);
    // await login(browser);
    await getNumbers(browser);
    
}
async function start(browser){
    try {
        const page = await browser.newPage();
        let url = `https://www.pixiv.net/en/`
        console.log(`Navegando para ${url}`);
        await page.goto(url);
        await page.close();      
    } catch (error) {
        console.log(error);
    }
}
async function login(browser){
    try{
        const page = await browser.newPage();
        let url = `https://accounts.pixiv.net/login`
        console.log(`Navegando para ${url}`);
        await page.goto(url);
        await page.type('input[type="text"]', ``);
        await page.type('input[type="password"]', ``);
        await page.click('button[type="submit"]');
        console.log(`Login bem sucedido!!!`);
        //await page.close();
    }
    catch(error){
        console.log(error);
    }
}
async function getNumbers(browser){
    try {
        
        const page = await browser.newPage();
        let url = `https://www.google.com/search?q=puppeteer+page.evaluate+document.queryselector`
        console.log(`Navegando para ${url}`);
        await page.goto(url);
        let following = await page.evaluate((sel) => {
            return document.querySelector('div#result-stats').innerText
        }, sel)
        console.log(`Pronto! ${following}`);
        // await page.close();
    } catch (error) {
        //
    }
}
module.exports = (browser) => pageController(browser);