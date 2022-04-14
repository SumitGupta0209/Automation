const puppeteer=require("puppeteer");

let browserPromise=puppeteer.launch({headless: false})


browserPromise.then(
    function(browser)
    {
        console.log("browser opened");
        let pagepromimse=browser.newPage();
        return pagepromimse;
    }

).then(

    function(page)
    {
        console.log("page created");
        let urlpromise=page.goto("https://github.com/");
        return urlpromise;
    }
).then(
    function(url)
    {
        console.log("github opened");
    }
)



