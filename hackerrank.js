const puppeteer=require("puppeteer");
const code=require("./code")
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
        return page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    }
).then(
    function()
    {
       let arrkapromise=page.evaluate(
           function()
           {
               let arr=[];
               let atags=document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
               for(let i=0;i<atags.length;i++)
               {
                   let link=atags[i].href;
                   arr.push(link);
               }
               return arr;
           }
       )
       return arrkapromise;
    }
).then(
    function(quesarray)
    {
        console.log(quesarray);
        let questionkaPromise=questionSolver(quesarray[0],code.answers[0]);
        for(let i=1;i<quesarray.length;i++)
        {
            questionkaPromise = questionkaPromise.then(
                function()
                {
                let nextQuestionPromise = questionSolver(quesarray[i],code.answers[i]);
                return nextQuestionPromise;
                })
        }
        return questionkaPromise;
    }
).then(
    function()
    {
        console.log("All the warm up questions have been submitted!!!");
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
            }
            ).then(
            function()
            {
            resolve();
            });
        })
}



function questionSolver(question,answer)
{
    return new Promise(
        function(resolve,reject)
        {
        let linkPromise = page.goto(question);
        linkPromise.then(
            function()
            {
            return waitAndClick('.checkBoxWrapper input');
            }).then(
            function()
            {
            return waitAndClick('.ui-tooltip-wrapper textarea');
            }).then(
            function()
            {
            console.log("on the text area");
            let typePromise = page.type('.ui-tooltip-wrapper textarea',answer);
            return typePromise;
            }).then(
            function()
            {
            let holdControl = page.keyboard.down('Control');
            return holdControl;
            }).then(
            function()
            {
            let pressA = page.keyboard.press('A');
            return pressA;
            }).then(
            function()
            {
            let pressX = page.keyboard.press('X');
            return pressX;
            }).then(
            function()
            {
            let upControl = page.keyboard.up('Control');
            return upControl;
            }).then(
            function()
            {
            return waitAndClick('.monaco-editor.no-user-select.vs');
            }).then(
            function()
            {
            let holdControl = page.keyboard.down('Control');
            return holdControl;  
            }).then(
            function()
            {
            let pressA = page.keyboard.press('A');
            return pressA;
            }).then(
            function()
            {
            let pressV = page.keyboard.press('V');
            return pressV;
            }).then(
                function()
                {
                    let upControl=page.keyboard.up('Control');
                    return upControl;
                }
            ).then(
            function()
            {
            return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
            }).then(
            function()
            {
            console.log("questions submitted success");
            resolve();
            })
    })
}