const puppeteer=require("puppeteer");

let browserkapromise=puppeteer.launch({headless:false});

let page;

browserkapromise.then(
    function(browser)
    {
        console.log("browser opened");

        let pageKapromise=browser.newPage();
        return pageKapromise;
    }
).then(

    function(pageInstance)
    {
        console.log("page opened");
        page=pageInstance;
        let urlkapromise=page.goto("https://www.hackerrank.com");
        return urlkapromise;
    }
).then(
    function()
    {
        console.log("hacker rank opened");
        let waitkapromise=page.waitForSelector("ul.menu a");
        return waitkapromise;
    }
).then(
    function()
    {
        let clickkapromise=page.click("ul.menu a");
        return clickkapromise;
    }
)