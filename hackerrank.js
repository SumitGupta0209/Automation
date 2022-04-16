const puppeteer=require("puppeteer");

let browserkapromise=puppeteer.launch({headless:false});

let page;
const mail="mateyiv148@hhmel.com";
const pass="123456";

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
).then(
    function()
    {
        let waitkapromise=page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
        return waitkapromise;
    }
).then(
    function()
    {
        let domClickPromse = page.evaluate(
            function()
            {
            let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
            btns[1].click();
            return;
            });
            return domClickPromse;
    }
).then(
    function()
    {
        console.log("loging page opend");
        let waitkapromise=page.waitForSelector("#input-1");
        return waitkapromise;
    }
).then(
    function()
    {
        let mailtypekapromise=page.type("#input-1",mail,{delay:100});
        return mailtypekapromise;
    }
).then(
    function()
    {
        let passtypekapromise=page.type("#input-2",pass,{delay:100});
        return passtypekapromise;
    }
).then(
    function()
    {
        console.log("login credentials given");
        let clickkapromimse=page.click('button[data-analytics="LoginPassword"]');
        return clickkapromimse;
    }
).then(
    function()
    {
        console.log("login done");
    }
)