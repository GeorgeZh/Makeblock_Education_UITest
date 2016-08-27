var driver = require('../Driver/driver').getDriver()
var By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until
var user_opr = require('../Operation/user_opr')
var Condition = require('selenium-webdriver/lib/webdriver').Condition

var element = undefined
var alert = undefined
var err = '--------------------error param--------------------'

module.exports.getElement = function(e){
	this.element = e
	return this
}

module.exports.get = function(url){
	driver.get(url)
	return this
}

module.exports.sleep = function(time){
	driver.sleep(time)
	return this
}

module.exports.click = function(e){
	if(arguments.length == 0){
		driver.findElement(this.element).click()
	    driver.sleep(100)
	    return this
	}else if(arguments.length == 1){
		driver.findElement(e).click()
	    driver.sleep(100)
	    return this
	}else{
		console.log(err)
		return this
	}
}

//使用时需要将鼠标移出到页面外区域
module.exports.mouseMove = function(e){
	if(arguments.length == 0){
		driver.actions().mouseMove(driver.findElement(this.element)).perform()
	    return this
	}else if(arguments.length == 1){
		driver.actions().mouseMove(driver.findElement(e)).perform()
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.sendKeys = function(string,e){
	if(arguments.length == 1){
		driver.findElement(this.element).sendKeys(string)
	    return this
	}else if(arguments.length == 2){
		driver.findElement(e).sendKeys(string)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.wait = function(foo,timeout){
	if(arguments.length == 1){
		driver.wait(foo,3000)
        return this
	}else if(arguments.length == 2){
		driver.wait(foo,timeout)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitElement = function(e,timeout){
	if(arguments.length == 0){
		driver.wait(until.elementLocated(this.element),3000)
	    return this
	}else if(arguments.length == 1){
	    driver.wait(until.elementLocated(e),3000)
	    return this
    }else if(arguments.length == 2){
    	driver.wait(until.elementLocated(e),timeout)
    	return this
    }else{
    	console.log(err)
    	return this
    }
}

module.exports.waitTitle = function(title,timeout){
	if(arguments.length == 1){
		driver.wait(until.titleContains(title),3000)
	    return this
	}else if(arguments.length == 2){
		driver.wait(until.titleContains(title),timeout)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitUrl = function(url,timeout){
	if(arguments.length == 1){
		driver.wait(untilUrlContains(url),3000)
	    return this
	}else if(arguments.length == 2){
	    driver.wait(untilUrlContains(url),timeout)
	    return this
    }else{
    	console.log(err)
    	return this
    }
}

module.exports.waitText = function(text,e,timeout){
	if(arguments.lenth == 1){
		driver.wait(until.elementTextContains(driver.findElement(this.element),text),3000)
		return this
	}else if(arguments.length == 2){
		driver.wait(until.elementTextContains(driver.findElement(e),text),3000)
		return this
	}else if(arguments.length == 3){
		driver.wait(until.elementTextContains(driver.findElement(e),text),timeout)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitCssValue = function(property,value,e,timeout){
	if(arguments.length == 2){
		driver.wait(untilCssVlueContains(property,value,driver.findElement(this.element)),3000)
	    return this
	}else if(arguments.length == 3){
		driver.wait(untilCssVlueContains(property,value,driver.findElement(e)),3000)
		return this
	}else if(arguments.length == 4){
		driver.wait(untilCssVlueContains(property,value,driver.findElement(e)),timeout)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitAttribute = function(attribute,value,e,timeout){
	if(arguments.length == 2){
		driver.wait(untilAttributeContains(attribute,value,driver.findElement(this.element)),3000)
	    return this
	}else if(arguments.length == 3){
		driver.wait(untilAttributeContains(attribute,value,driver.findElement(e)),3000)
		return this
	}else if(arguments.length == 4){
		driver.wait(untilAttributeContains(attribute,value,driver.findElement(e)),timeout)
		return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitAlert = function(timeout){
	if(arguments.length == 0){
		driver.wait(until.alertIsPresent(),3000)
		this.alert = driver.switchTo().alert()
		driver.sleep(300)
	    return this
	}else if(arguments.length == 1){
		driver.wait(until.alertIsPresent(),timeout)
		this.alert = deriver.switchTo().alert()
		driver.sleep(300)
		return this
    }else{
	    console.log(err)
	    return this
 	}
}

module.exports.alertText = function(value){
	this.alert.getText().then(function(text){
		text.should.be.eql(value)
	})
	return this
}

module.exports.alertAccept = function(){
	this.alert.accept()
	return this
}

module.exports.alertDismiss = function(){
	this.alert.dismiss()
	return this
}

module.exports.alertSendKeys = function(string){
	this.alert.sendKeys(string)
	return this
} 

module.exports.driver = function(){
	return driver
}

module.exports.switchTo = function(num){
	driver.switchTo().window(driver.getAllWindowHandles().then(function(handle){
		return handle[num]
	}))
	return this
}

module.exports.close = function(){
	driver.close()
	return this
}

module.exports.title = function(value){
	driver.getTitle().then(function(title){
		title.should.be.eql(value)
	})
	return this
}

module.exports.url = function(value){
	driver.getCurrentUrl().then(function(url){
	    url.shuold.be.eql(value)
	})
	return this
}

module.exports.text = function(value,e){
	if(arguments.length == 1){
		driver.findElement(this.element).getText().then(function(text){
		    text.should.be.eql(value)
	    })
	    return this
    }else if(arguments.length == 2){
    	driver.findElement(e).getText().then(function(text){
		    text.should.be.eql(value)
	    })
	    return this
    }else{
    	console.log(err)
    	return this
    }
}

module.exports.getText = function(e){
	if(arguments.length == 0){
		module.exports.elemText = driver.findElement(this.element).getText()
	    return this
	}else if(arguments.length == 1){
		module.exports.elemText = driver.findElement(e).getText()
	    return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.attribute = function(attribute,value,e){
	if(arguments.length == 2){
		driver.findElement(this.element).getAttribute(attribute).then(function(attr){
		    attr.should.be.eql(value)
	    })
	    return this
	}else if(arguments.length == 3){
		driver.findElement(e).getAttribute(attribute).then(function(attr){
		    attr.should.be.eql(value)
	    })
	    return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.maximize = function(){
	driver.manage().window().maximize()
	return this
}

module.exports.pageLoadTimeout = function(timeout){
	driver.manage().timeouts().pageLoadTimeout(timeout)
	return this
}

module.exports.cssValueIs = function(property,value,e){
	if(arguments.length == 2){
		driver.findElement(this.element).getCssValue(property).then(function(temp){
		    temp.should.be.eql(value)
	    })
	    return this
	}else if(arguments.length == 3){
		driver.findElement(e).getCssValue(property).then(function(temp){
		    temp.should.be.eql(value)
	    })
	    return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.waitToVisible = function(e,timeout){
	if(arguments.length == 0){
		driver.wait(until.elementIsVisible(driver.findElement(this.element)),3000)
	    return this
	}else if(arguments.length == 1){
		driver.wait(until.elementIsVisible(driver.findElement(e)),3000)
	    return this
	}else if(arguments.length == 2){
		driver.wait(until.elementIsVisible(driver.findElement(e)),timeout)
	    return this
	}else{
		console.log(err)
		return this
	}
}

module.exports.back = function(){
	driver.navigate().back()
	driver.sleep(500)
	return this
}







var untilAttributeContains = function(attribute,value,element){
	return new Condition(
		'for ' + JSON.stringify(attribute) + ' to contain ' + JSON.stringify(value),
		function(driver){
			return element.getAttribute(attribute).then(function(a){
				return a.indexOf(value) !== -1
				//return a === value
			})
		})
}

var untilCssVlueContains = function(property,value,element){
    return new Condition(
        'for ' + JSON.stringify(property) + ' to contain ' + JSON.stringify(value),
    function(driver){
        return element.getCssValue(property).then(function(v){
            return v.indexOf(value) !== -1
            //return v === value
        })
    })
}

var untilUrlContains = function(url){
    return new Condition(
        'for URL to contain ' + JSON.stringify(url),
    function(driver){
        return driver.getCurrentUrl().then(function(u){
            return u.indexOf(url) !== -1
            //return u === url
        })
    })
}


//ableToSwitchToFrame