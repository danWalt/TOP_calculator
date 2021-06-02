const { chromium } = require('playwright');
import 'babel-polyfill'
const expect = require('expect');



describe('open browser', ()=> {
    it('open browser', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        await browser.close();

    })
})


describe('click on calculator numbers', () => {
    it('click on 0', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=0");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('0');
        await browser.close();
    })  

    it('click on 1', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=1");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('1');
        await browser.close();
    })  

    it('click on 2', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=2");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('2');
        await browser.close();
    })  

    it('click on 3', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=3");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('3');
        await browser.close();
    })  

    it('click on 4', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=4");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('4');
        await browser.close();
    })  

    it('click on 5', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=5");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('5');
        await browser.close();
    })  

    it('click on 6', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=6");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('6');
        await browser.close();
    })  

    it('click on 7', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=7");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('7');
        await browser.close();
    })  

    it('click on 8', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=8");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('8');
        await browser.close();
    })  

    it('click on 9', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=9");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('9');
        await browser.close();
    })  



    
describe ('test calculations', () => {
    it('add 2 + 5', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=2");
        await page.click("id=plus");
        await page.click("id=5");
        await page.click("id=equals");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('7');
        await browser.close();
    })  


    it('add 2.3 + 5.41', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=2");
        await page.click("id=decimal");
        await page.click("id=3");
        await page.click("id=plus");
        await page.click("id=5");
        await page.click("id=decimal");
        await page.click("id=4");
        await page.click("id=1");
        await page.click("id=plus");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('7.71');
        await browser.close();
    })  


    it('5.41 - 7.83', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=5");
        await page.click("id=decimal");
        await page.click("id=4");
        await page.click("id=1");
        await page.click("id=minus");
        await page.click("id=7");
        await page.click("id=decimal");
        await page.click("id=8");
        await page.click("id=3");
        await page.click("id=equals");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('-2.4199999999999995');
        await browser.close();
    })  

    it('541 / 213', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=5");
        await page.click("id=4");
        await page.click("id=1");
        await page.click("id=divide");
        await page.click("id=2");
        await page.click("id=1");
        await page.click("id=3");
        await page.click("id=equals");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('2.539906103286385');
        await browser.close();
    })  


    it('54 * 7.1', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=5");
        await page.click("id=4");
        await page.click("id=multiply");
        await page.click("id=7");
        await page.click("id=decimal");
        await page.click("id=1");
        await page.click("id=equals");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('383.4');
        await browser.close();
    })  


    it('clear all', async () => {
        const browser = await chromium.launch({});
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        const dataScreen = await page.$('.data-screen');
        await page.click("id=5");
        await page.click("id=decimal");
        await page.click("id=4");
        await page.click("id=1");
        await page.click("id=clear-all");
        expect(await dataScreen.evaluate(dataScreen => dataScreen.innerText)).toBe('');
        await browser.close();
    })  
});

   

});
