}).then(function(){
    console.log("Login successful hogya hai ")
    let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup Selected");
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
}).then(function(){
    
})