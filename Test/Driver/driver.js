var webdriver = require('selenium-webdriver')

var driver = undefined
var browser = 'chrome'

module.exports.getDriver = function(){
	if(driver == undefined){
		driver = new webdriver.Builder().forBrowser(browser).build()
	}
	return driver
}