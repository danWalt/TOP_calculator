const { chromium } = require('playwright');
import 'babel-polyfill'

// (async () => {
//   //const browser = await chromium.launch({});
//   const browser = await chromium.launch({headless:false});

//   const page = await browser.newPage();
//   await page.goto('http://127.0.0.1:5500/index.html');
//   //await page.screenshot({ path: `example.png` });
  
//   await page.click('[id=1]');
//   let dataScreen = await page.innerText('data-screen')
   
//   // run this using node .\ui.test.js
  
  
  
//   await browser.close();
// })();


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
        await page.click("id=0");
        await browser.close();
    })


    
});