// Karma configuration
// Generated on Thu Jun 14 2018 12:19:48 GMT+0700 (+07)

module.exports = function() {
	return {
		frameworks: ['jasmine'],
		preprocessors: {
			'*.html': ['ng-html2js']
		},
		files: [
			"bower_components/angular/angular.min.js",
			"bower_components/angular-route/angular-route.min.js",
			"bower_components/angular-ui-router/release/angular-ui-router.min.js",
			"bower_components/angular-mocks/angular-mocks.js",
			"src/*.js",
			"*.html",
			"test/unit/*.spec.js"
		],
		autoWatch: true,
		browsers: ['Chrome']
	};
}
