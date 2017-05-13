//http://www.way2automation.com/protractor-angularjs-practice-website.html

exports.config = {
	framework: 'custom',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
  		browserName: 'chrome'
  	},
	specs:[
		'./registration.feature'
	],
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		format: 'pretty',
		require:[//'./support/env.js',
		'./step_definitions/*.js']
	},
	getPageTimeout: 1000,
  	allScriptsTimeout: 5000
}