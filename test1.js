const { hasUncaughtExceptionCaptureCallback } = require("process");
const { isMainThread } = require("worker_threads")





 describe('Add User', function () {

    it('addition test',function () {

        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
        element(by.model('btn btn-link pull-right'));
        element(by.css('[ng-click="pop()"]')).click();
        browser.findElement(by.name('FirstName')).sendKeys('Tony');
        browser.findElement(by.name('LastName')).sendKeys('Atark');
        browser.findElement(by.name('UserName')).sendKeys('IronMan');
        browser.findElement(by.name('RoleId')).sendKeys('Admin');
        browser.findElement(by.name('Mobilephone')).sendKeys('123456789');
        element(by.css('[ng-click="save(user)"]')).click();


        browser.sleep(10000);

    })      
})

------------------------------------------------------------------------------

describe('Remove User',function () {

    it('remove user', function () {
        var lastNames=[novak,sale,Blue,admin,Testadmin,test,testsale]
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
        
     
     if { lastNames=element.all(by.repeater('column in columns')).get(0).getText()===novak;
        
        browser.findelement(by.css('[ng click =icon icon-remove')).click();



    }

    else{

        console.log(lastNames);
    }
    
        
            
       
    })
    
})
