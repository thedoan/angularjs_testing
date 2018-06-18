exports.config = {
	baseUrl: 'http://localhost:8000',
	/*
	seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar',
	*/
	/*
	seleniumAddress: 'http://localhost:4444/wd/hub',
	*/
	specs: ['test/e2e/*.e2e.js'],
	/*
	capabilities: {
		'browserName': 'firefox'
	}
	*/
	/*
	multiCapabilities:[
		{
				'browserName': 'firefox',
				'moz:firefoxOptions': {
					'args': ['--safe-mode']
				}
		},
		{
			'browserName': 'chrome',
			'chromeOptions': {
				'args': ['show-fps-counter=true']
			}
		}
	],
	*/
	jasmineNodeOpts: {
		showColors: true, // use colors in the command line	report
		defaultTimeoutInterval: 30000
	}
};
