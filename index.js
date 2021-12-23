const express = require('express');
const app = express();
const port = 3000;
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/myshopkit-magic-badges/v1/cache-badges', async (request,response) => {
    try {
        const url = request.body.url;
        if(url==''){
            throw ("error");
        }
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await browser.close();
        response.send('Passed');
    } catch (error) {
        response.send('error');
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});