var driver = require('../Driver/driver').getDriver()
var test = require('selenium-webdriver/testing')
var By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until

var url = require('../Date/webURL')
var nav = require('../Page/home_page').nav_bar
var home = require('../Page/home_page')
var title = require('../Date/page_title')
var style = require('../Date/cssStyle')

var user_opr = require('../Operation/user_opr')
var Zopr = require('../Operation/Zopr')

var email = require('../Date/user_data').email
var password = require('../Date/user_data').password
var name = require('../Date/user_data').name

//Education首页
test.describe('Home page test',function(){

	this.timeout(5 * 60 * 1000)

	test.before(function(){
		Zopr
		.maximize()
	})

	test.it('#Automated Tests001',function(done){
        //进入首页
		Zopr
		.get(url.HOME)
		.waitElement(home.BANNER)
		.waitTitle(title.HOME)
		done()
	})

	test.it('#Automated Tests002',function(done){
        // 导航栏进入发现页面
		Zopr
		.get(url.HOME)
		.getElement(nav.COMMUNITY)
		.waitElement()
		.mouseMove()
		.waitCssValue('color',style.COLOR01)
		.click()
		.waitUrl(url.COMMUNITY)
		.waitTitle(title.COMMUNITY)
		.waitCssValue('background-color',style.COLOR02)
		done()
	})

	test.it('#Automated Tests003',function(done){
	    //导航栏进入课程页面
		Zopr
		.get(url.HOME)
		.getElement(nav.LESSON)
		.waitElement()
		.mouseMove()
		.waitCssValue('color',style.COLOR01)
		.click()
		.waitUrl(url.LESSON)
		.waitTitle(title.LESSON)
		.waitCssValue('background-color',style.COLOR02)
		done()
	})		

	test.it('#Automated Tests004',function(done){
	    //导航栏进入IDE页面
		Zopr
		.get(url.HOME)
		.getElement(nav.IDE)
		.waitElement()
		.mouseMove()
		.waitCssValue('color',style.COLOR01)
		.waitCssValue('border-color',style.COLOR03)
		.click()
		.waitUrl(url.IDE)
		.waitTitle(title.IDE)
		done()
	})

	test.it('#Automated Tests005',function(done){
	    //刷新首页，logo进入首页，导航栏进入首页
		Zopr
		.get(url.HOME)
		.getElement(nav.LOGO)
		.waitElement()
		.waitAttribute('href',url.HOME)
		.waitCssValue('background-color',style.COLOR02,nav.HOME)
		.click()
		.waitUrl(url.HOME)
		.getElement(nav.HOME)
		.waitAttribute('href',url.HOME)
	    .waitCssValue('background-color',style.COLOR02)
		.click()
		.waitUrl(url.HOME)
		done()
	})

	test.it('#Automated Tests006',function(done){
	    //刷新发现页面
		Zopr
		.get(url.COMMUNITY)
		.getElement(nav.COMMUNITY)
		.waitAttribute('href','/community')
		.click()
		.waitUrl(url.COMMUNITY)
		done()
	})

	test.it('#Automated Tests007',function(done){
	    //刷新课程页面
		Zopr
		.get(url.LESSON)
		.getElement(nav.LESSON)
		.waitAttribute('href','/lesson')
		.click()
		.waitUrl(url.LESSON)
		done()
	})

	test.it('#Automated Tests008',function(done){
	    //登录流程
	    driver.get(url.HOME)
		user_opr.login(email,password)
		done()
	})
    
	test.it('#Automated Tests009',function(done){
        //显示下拉菜单
		// driver.get(url.HOME)
		// user_opr.login(email,password)
		Zopr
		.get(url.HOME)
		.getElement(nav.MASK)
	    .waitAttribute('aria-expanded','false')
	    .mouseMove()
	    .waitCssValue('color','rgba(41, 154, 207, 1)')
	    .waitCssValue('display','block',nav.DOWN)
	    .click()
	    .waitCssValue('display','block',nav.UP)
	    .waitAttribute('aria-expanded','true',nav.MASK)
	    .waitElement(nav.LOGOUT)
	    .text(name,nav.USER)
	    done()
	})

	test.it('#Automated Tests010',function(done){
	    //关闭下拉菜单
		// driver.get(url.HOME)
		// user_opr.login(email,password)
		Zopr
		.get(url.HOME)
		.waitElement(nav.MASK)
		.click(nav.MASK)
		.waitAttribute('aria-expanded','true',nav.MASK)
		.click(By.css('body > header'))
		.waitCssValue('display','none',nav.UP)
		.waitCssValue('display','none',nav.DOWN)
		.waitAttribute('aria-expanded','false',nav.MASK)
		done()
	})

	test.it('#Automated Tests011',function(done){
	    // 进入我的工作室页面
		// driver.get(url.HOME)
		// user_opr.login(email,password)
		Zopr
		.get(url.HOME)
		.getElement(nav.WORKSPACE)
		.waitElement()
		.mouseMove()
		.waitCssValue('color',style.COLOR01)
		.waitCssValue('border-color',style.COLOR03)
		.click()
		.waitUrl(url.WORKSPACE)
		.waitTitle(name + title.WORKSPACE)
		done()
	})

	test.it('#Automated Tests012',function(done){
	    //进入我的账户页面
		driver.get(url.HOME)
		user_opr.intoUser()
		done()
	})

	test.it('#Automated Tests013',function(done){
        //退出登录
		driver.get(url.HOME)
		user_opr.logout()
		done()
	})

	test.it('#Automated Tests014',function(done){
	    //Banner进入注册页面
		Zopr
		.get(url.HOME)
		.getElement(home.REGISTER)
		.waitElement()
		.mouseMove()
		.waitCssValue('background-color','244, 166, 42')
		.waitCssValue('border-color','244, 166, 42')
		.click()
		.waitUrl(url.PASSPORT.REGISTER)
		done()
	})

	test.it('#Automated Tests015',function(done){
	    //进入活动详情页
		Zopr
		.get(url.HOME)
		.getElement(home.ROBOTTIMES)
		.waitElement()
		.mouseMove()
		.waitCssValue('background-color','237, 104, 96')
		.waitCssValue('border-color','237, 104, 96')
		.click()
		.waitUrl(url.ROBOTTIMES)
		done()
	})

	test.it('#Automated Tests016',function(done){
	    //活动详情页两个注册入口
		Zopr
		.get(url.ROBOTTIMES)
		.getElement(By.css('body > div > section.section-setp > a'))
		.waitElement()
		.click()
		.waitUrl(url.PASSPORT.REGISTER)
		.back()
		.getElement(By.css('body > div > section.section-join-register > a'))
		.waitElement()
		.click()
		.waitUrl(url.PASSPORT.REGISTER)
		done()
	})

	test.it('#Automated Tests017',function(done){
	    //作品展示区进入作品详情页
		Zopr
		.get(url.HOME)
		.getElement(home.PROJECT)
		.waitElement()
		.getText()
		.click()
		.waitUrl(url.PROJECT)
		Zopr.elemText.then(function(text){
			Zopr.waitTitle(text)
		})
		done()
	})

	test.it('#Automated Tests018',function(done){
	    // 作品展示区显示更多作品
		Zopr
		.get(url.HOME)
		.getElement(home.MOREPROJECT)
		.waitElement()
		.mouseMove()
		.waitCssValue('background-color','67, 181, 235')
		.waitCssValue('border-color','67, 181, 235')
		.click()
		.waitUrl(url.COMMUNITY)
		done()
	})

	test.it('#Automated Tests019',function(done){
    	//进入mBot课程
		Zopr
		.get(url.HOME)
		.getElement(home.MBOT_LESSON)
		.waitElement()
		.click()
		.waitUrl('#mBot')
		.waitTitle(title.LESSON)
		done()
	})

	test.it('#Automated Tests020',function(done){
    	//进入mBot产品介绍页
		Zopr
		.get(url.HOME)
		.getElement(home.MBOT)
		.waitElement()
		.click()
		.waitUrl(url.MBOT)
		done()
	})

	test.it('#Automated Tests021',function(done){
    	//mBot产品介绍页进入购买mBot
		Zopr
		.get(url.MBOT)
		.getElement(By.xpath('/html/body/div/section[1]/div/div[1]/a'))
		.waitElement()
		.click()
		.switchTo(1)
		.waitTitle('mBot入门可编程教育机器人套件儿童diy智能玩具')
		.close()
		.switchTo(0)
		done()
	})

	test.it('#Automated Tests022',function(done){
    	//mBot产品介绍页进入购买六足扩展包
		Zopr
		.get(url.MBOT)
		.getElement(By.xpath('/html/body/div/section[1]/div/div[2]/a'))
		.waitElement()
		.click()
		.switchTo(1)
		.waitTitle('mBot六足机器人扩展包')
		.close()
		.switchTo(0)
		done()
	})

	test.it('#Automated Tests023',function(done){
    	//mBot产品介绍页进入购买小猫扩展包
		Zopr
		.get(url.MBOT)
		.getElement(By.xpath('/html/body/div/section[1]/div/div[3]/a'))
		.waitElement()
		.click()
		.switchTo(1)
		.waitTitle('mBot动感小猫扩展包')
		.close()
		.switchTo(0)
		done()
	})

	test.it('#Automated Tests024',function(done){
    	//进入mBot Ranger课程
		Zopr
		.get(url.HOME)
		.getElement(home.RANGER_LESSON)
		.waitElement()
		.click()
		.waitUrl('#mBotRanger')
		.waitTitle(title.LESSON)
		done()
	})

	test.it('#Automated Tests025',function(done){
    	//进入mBot Ranger产品介绍页
		Zopr
		.get(url.HOME)
		.getElement(home.RANGER)
		.waitElement()
		.click()
		.waitUrl(url.RANGER)
		done()
	})

	test.it('#Automated Tests026',function(done){
    	//mBot Ranger产品介绍页进入购买mBot Ranger
		Zopr
		.get(url.RANGER)
		.getElement(By.xpath('/html/body/div/section[1]/a'))
		.waitElement()
		.click()
		.switchTo(1)
		.waitTitle('mBot Ranger游侠可编程diy教育机器人')
		.close()
		.switchTo(0)
		done()
	})

	test.it('#Automated Tests027',function(done){
    	//显示TOP按钮
		Zopr
		.get(url.HOME)
		.getElement(home.TOP)
		.waitElement()
		.waitCssValue('display','none')
		.mouseMove(home.RANGER)
		.getElement(home.TOP)
		.waitCssValue('display','block')
		done()
	})

    test.it('#Automated Tests028',function(done){
        //TOP页面置顶
    	Zopr
		.get(url.HOME)
		.getElement(home.TOP)
		.waitElement()
		.mouseMove(home.MAKEBLOCK)
		.getElement(home.TOP)
		.waitCssValue('display','block')
    	.click()
		.waitCssValue('display','none')
		done()
    })

    test.it('#Automated Tests029',function(done){
        //进入天猫
    	Zopr
    	.get(url.HOME)
    	.getElement(home.TMALL)
    	.waitElement()
    	.click()
    	.switchTo(1)
    	.waitUrl(url.TMALL)
    	.close()
    	.switchTo(0)
    	.waitUrl(url.HOME)
    	done()
    })

    test.it('#Automated Tests030',function(done){
        //进入京东
    	Zopr
    	.get(url.HOME)
    	.getElement(home.JD)
    	.waitElement()
    	.click()
    	.switchTo(1)
    	.waitUrl(url.JD)
    	.close()
    	.switchTo(0)
    	.waitUrl(url.HOME)
    	done()
    	
    })

    test.it('#Automated Tests031',function(done){
        //进入Makeblock官网
    	Zopr
    	.get(url.HOME)
    	.getElement(home.MAKEBLOCK)
    	.waitElement()
    	.click()	
    	.waitUrl(url.MAKEBLOCK)
    	done()
    })

    test.it('#Automated Tests032',function(done){
        //进入博客
    	Zopr
    	.get(url.HOME)
    	.getElement(home.BLOG)
    	.waitElement()
    	.click()
    	.waitUrl(url.BLOG)
    	done()
    })

    test.it('#Automated Tests033',function(done){
        //进入论坛
    	Zopr
    	.get(url.HOME)
    	.getElement(home.BBS)
    	.waitElement()
    	.click()
    	.waitUrl(url.BBS)
    	done()
    })

    test.it('#Automated Tests034',function(done){
        //进入mBlock
    	Zopr
    	.get(url.HOME)
    	.getElement(home.MBLOCK)
    	.waitElement()
    	.click()
    	.waitUrl(url.MBLOCK)
    	done()
    })

    test.it('#Automated Tests035',function(done){
        //关于我们
    	Zopr
    	.get(url.HOME)
    	.getElement(home.INFORMATION1)
    	.waitElement()
    	.click()
    	.waitUrl(url.INFORMATION1)
    	done()
    })

    test.it('#Automated Tests036',function(done){
        //媒体报道
    	Zopr
    	.get(url.HOME)
    	.getElement(home.INFORMATION2)
    	.waitElement()
    	.click()
    	.waitUrl(url.INFORMATION2)
    	done()
    })

    test.it('#Automated Tests037',function(done){
        //加入我们
    	Zopr
    	.get(url.HOME)
    	.getElement(home.INFORMATION3)
    	.waitElement()
    	.click()
    	.waitUrl(url.INFORMATION3)
    	done()
    })

    test.it('#Automated Tests038',function(done){
        //技术支持
    	Zopr
    	.get(url.HOME)
    	.getElement(home.INFORMATION4)
    	.waitElement()
    	.click()
    	.waitUrl(url.INFORMATION4)
    	done()
    })

    test.it('#Automated Tests039',function(done){
        //售后服务
    	Zopr
    	.get(url.HOME)
    	.getElement(home.INFORMATION5)
    	.waitElement()
    	.click()
    	.waitUrl(url.INFORMATION5)
    	done()
    })

    test.it('#Automated Tests040',function(done){
        //了解更多动态
    	Zopr
    	.get(url.HOME)
    	.waitElement(home.SUBSCRIBE)
    	.sendKeys(name,home.NAME)
    	.sendKeys(email,home.EMAIL)
    	.click(home.SUBSCRIBE)
    	.waitAlert()
    	.alertText('success')
    	.alertAccept()
    	done()
    })

    test.it('#Automated Tests041',function(done){
        //更多动态信息错误提示
    	Zopr
    	.get(url.HOME)
    	.getElement(home.SUBSCRIBE)
    	.waitElement()
    	.click()
    	.waitAlert()
    	.alertText('input string invalid')
    	.alertDismiss()
    	done()
    })

    test.it('#Automated Tests042',function(done){
        //显示二维码
    	Zopr
    	.get(url.HOME)
    	.getElement(home.WECHAT)
    	.mouseMove()
    	.waitToVisible(home.QRCODE)
    	done()
    })

    test.it('#Automated Tests043',function(done){
        //进入微博
    	Zopr
    	.get(url.HOME)
    	.click(home.WEIBO)
    	.switchTo(1)
    	.waitUrl(url.WEIBO)
    	.close()
    	.switchTo(0)
    	.waitUrl(url.HOME)
    	done()
    })

    test.it('#Automated Tests044',function(done){
        //进入优酷
    	Zopr
    	.get(url.HOME)
    	.click(home.YOUKU)
    	.switchTo(1)
    	.waitUrl(url.YOUKU)
    	.close()
    	.switchTo(0)
    	.waitUrl(url.HOME)
    	done()
    })

    test.it('#Automated Tests045',function(done){
        //进入腾讯视频
    	Zopr
    	.get(url.HOME)
    	.click(home.TENCENT)
    	.switchTo(1)
    	.waitUrl(url.TENCENT)
    	.close()
    	.switchTo(0)
    	.waitUrl(url.HOME)
    	done()
    })

	test.after(function(done){
		driver.quit()
		done()
	})
})