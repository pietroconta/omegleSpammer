const puppeteer = require('puppeteer');
(async () => {
  //const browser = await puppeteer.launch({headless:false});
 const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser'
})
  const page = await browser.newPage();
  await page.waitForTimeout(1000);     //callibrate as per your need
  await page.goto('https://www.omegle.com');
  await page.click('#textbtn');

  const elHandleArray = await page.$$('div div p label')

  for (const el of elHandleArray) {
    await el.click()
  }

  const confirm = await page.$$('div div p input')
  var d = 0;
  for (const el of confirm) {
    d++;
    if(d == 3)
    await el.click()
  }
  await page.waitForTimeout(2000);  
  
  do{

  await page.$eval('.chatmsg ', el => el.value = 'hello, a random chat site where you can choose to be matched with whoever you want? Here s to you randoot.com');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);  
  await page.click('.disconnectbtn');
  await page.click('.disconnectbtn');
  await page.click('.disconnectbtn');
    
  while(await page.$('.sendbtn[disabled]') !== null){
    await page.waitForTimeout(3000);  
    await page.click('.disconnectbtn');
  }
 
  }while(true);
 })()


 //by Pietro Contadini - Go-At Code Studio
