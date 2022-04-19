const puppeteer=require("puppeteer");

let browserkapromise=puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen']});

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
        return waitAndClick("ul.menu a");
    }
//     function()
//     {
//         console.log("hacker rank opened");
//         let waitkapromise=page.waitForSelector("ul.menu a");
//         return waitkapromise;
//     }
// ).then(
//     function()
//     {
//         let clickkapromise=page.click("ul.menu a");
//         return clickkapromise;
//     }
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
        return waitAndClick('[data-automation="algorithms"]');
    }
//     function()
//     {
//         console.log("login done");
//         let waitkapromise=page.waitForSelector('[data-automation="algorithms"]');
//         return waitkapromise;
//     }
// ).then(
//     function()
//     {
//         let clickkapromimse=page.click('[data-automation="algorithms"]');
//         return clickkapromimse;
//     }
).then(
    function()
    {
        return page.waitForSelector(".filter-group");
    }
).then(
    function()
    {
        let domClickPromse=page.evaluate(
            function()
            {
                let allDivs = document.querySelectorAll(".filter-group");
                let div = allDivs[3];
                let clickSelector = div.querySelector(".ui-checklist-list-item input");
                clickSelector.click();
                return;
            }
        );
        return domClickPromse;
    }
).then(
    function()
    {
        console.log("warmup Selected");
        return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
    }
).then(
    function()
    {
       
    }
)


function waitAndClick(selector)
{
    return new Promise(
        function(resolve,reject)
        {
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(
            function()
            {
            let clickPromise = page.click(selector);
            return clickPromise;
            }).then(
            function()
            {
            resolve();
            });
        })
}