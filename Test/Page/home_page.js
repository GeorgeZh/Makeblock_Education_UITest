var By = require('selenium-webdriver').By

module.exports = {

    //导航栏
	nav_bar : {
		LOGO : By.css('body > header > section > a.logo-link'),
		HOME : By.css('ul.nav-links > li:nth-child(1) > a'),
		COMMUNITY : By.css('ul.nav-links > li:nth-child(2) > a'),
		LESSON : By.css('ul.nav-links > li:nth-child(3) > a'),
		IDE : By.css('ul.nav-links > li:nth-child(4) > a'),
		LOGIN : By.css('ul.nav-links > li:nth-child(5) > a'),
		WORKSPACE : By.css('ul.nav-links > li:nth-child(5) > a'),
		MASK : By.css('li.nav-link-warp.user-head-link-warp > a.head-dropdown-target'),
		USER : By.css('li.nav-link-warp.user-head-link-warp.open > ul > li:nth-child(1) > a'),
		LOGOUT : By.css('li.nav-link-warp.user-head-link-warp.open > ul > li:nth-child(2) > a'),
		UP : By.css('li.nav-link-warp.user-head-link-warp > a > span > i.fa.fa-angle-up'),
		DOWN : By.css('li.nav-link-warp.user-head-link-warp > a > span > i.fa.fa-angle-down')
	},

    //Banner
	BANNER : By.css('div.g-top-banner > div'),
	REGISTER : By.css('div.g-top-banner > div > div > a.btn.btn-warning.btn-register'),
	ROBOTTIMES : By.css('div.g-top-banner > div > div > a.btn.btn-danger'),

    //作品展示区
	PROJECT : By.css('#share_project > li:nth-child(2) > h4 > a'),
	MOREPROJECT : By.css('div.m-share > div > div.text-center > a'),
    
    //套件展示区
    MBOT_LESSON : By.css('div.g-sidebar.pull-right > div.u-box.u-box-a'),
    MBOT : By.css('div.g-sidebar.pull-right > div.u-box.u-box-b'),
    RANGER_LESSON : By.css('div.g-sidebar.pull-right > div.u-box.u-box-c'),
    RANGER : By.css('div.g-sidebar.pull-right > div.u-box.u-box-d'),

    //置顶按钮
    TOP : By.css('body > a'),

    //底部栏
    TMALL : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[1]/a'),
    JD : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[2]/a'),
    MAKEBLOCK : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[3]/a'),
    BLOG : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[4]/a'),
    BBS : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[5]/a'),
    MBLOCK : By.xpath('/html/body/footer/section[1]/div/div[1]/dl/dd[6]/a'),
    INFORMATION1 : By.xpath('/html/body/footer/section[1]/div/div[2]/dl/dd[1]/a'),
    INFORMATION2 : By.xpath('/html/body/footer/section[1]/div/div[2]/dl/dd[2]/a'),
    INFORMATION3 : By.xpath('/html/body/footer/section[1]/div/div[2]/dl/dd[3]/a'),
    INFORMATION4 : By.xpath('/html/body/footer/section[1]/div/div[2]/dl/dd[4]/a'),
    INFORMATION5 : By.xpath('/html/body/footer/section[1]/div/div[2]/dl/dd[5]/a'),
    NAME : By.css('#newsletterName'),
    EMAIL : By.css('#newsletterEmail'),
    SUBSCRIBE : By.css('#subscribem'),
    WECHAT : By.xpath('/html/body/footer/section[1]/div/div[4]/div/a[1]'),
    QRCODE : By.xpath('/html/body/footer/section[1]/div/div[4]/div/a[1]/div'),
    WEIBO : By.xpath('/html/body/footer/section[1]/div/div[4]/div/a[2]'),
    YOUKU : By.xpath('/html/body/footer/section[1]/div/div[4]/div/a[3]'),
    TENCENT : By.xpath('/html/body/footer/section[1]/div/div[4]/div/a[4]'),

}