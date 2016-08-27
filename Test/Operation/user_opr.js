var nav = require('../Page/home_page').nav_bar
var driver = require('../Driver/driver').getDriver()
var until = require('selenium-webdriver').until
var should = require('should')
var By = require('selenium-webdriver').By

var Zopr = require('../Operation/Zopr')
var style = require('../Date/cssStyle')
var url = require('../Date/webURL').PASSPORT
var title = require('../Date/page_title').PASSPORT

var login = function(email,password){
	Zopr
	.click(nav.LOGIN)
	.waitUrl(url.LOGIN)
	.sendKeys(email,By.id('email'))
	.sendKeys(password,By.id('password'))
	.click(By.id('loginBtn'))
}

var logout = function(){
	Zopr
	.click(nav.MASK)
	.click(nav.LOGOUT)
	.waitElement(nav.LOGIN)
}

var intoUser = function(){
	Zopr
	.click(nav.MASK)
	.click(nav.USER)
    .switchTo(1)
    .waitUrl(url.USER)
    .waitTitle(title.USER)
    .close()
    .switchTo(0)
    .waitElement(nav.MASK)
}

module.exports = {
	login : login,
	logout : logout,
    intoUser : intoUser
}