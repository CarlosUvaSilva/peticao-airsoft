const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {
  const pageToParse = JSON.parse(event.body).pageToParse;

  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto(pageToParse);

  // const screenshot = await page.screenshot({ encoding: 'binary' });

  await browser.close();

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: `Complete screenshot of ${pageToParse}`,
  //     buffer: screenshot
  //   })
  // }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `FUNCTIONS`
    })
  }

}
