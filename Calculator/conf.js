exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	allScriptsTimeout: 15000,
	capabilities: {
  		browserName: 'chrome'
  	}
}