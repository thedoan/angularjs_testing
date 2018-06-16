// Karma configuration
// Generated on Thu Jun 14 2018 12:19:48 GMT+0700 (+07)

module.exports = function() {
	return {
		frameworks: ['jasmine'],
		files: [
			"bower_components/angular/angular.min.js",
			"bower_components/angular-mocks/angular-mocks.js",
			"src/cookbook.js",
			"test/unit/cookbookSpec.js"
		],
		autoWatch: true,
		browsers: ['Chrome']
	};
}
