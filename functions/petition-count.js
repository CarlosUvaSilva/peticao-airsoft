const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {
  const pageToParse = event.queryStringParameters.url;

  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto(pageToParse);

  const voteCount = await page.waitForSelector('.npeople');
  const voteCountValue = await voteCount.evaluate(el => el.textContent);

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify(voteCountValue)
  }
}
