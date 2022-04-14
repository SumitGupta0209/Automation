const puppeteer=require("puppeteer");

let browserPromise=puppeteer.launch({headless: false})


browserPromise.then(
    function(browserInsance)
    {
        console.log("browser opened");
    }
)