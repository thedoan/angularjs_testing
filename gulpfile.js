var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var serveStatic = require('serve-static');
var serve = serveStatic('./', {'index': ['index.html', 'index.htm']})
//Update driver before protractor 
gulp.task('webdriver_update', $.protractor.webdriver_update);

gulp.task('connect', function () {
	var connect = require('connect');
	var app = connect();
	app.use(serve);
	$.server = require('http').createServer(app)
	.listen(8000);
});

gulp.task('test', function (done) {
	var karma = require('karma').server;
	var karmaConf = require('./karma.conf.js')();
	karma.start(karmaConf, done);
});

//e2e test use protactor
gulp.task('e2e', ['connect', 'webdriver_update'], function ()
	{
		gulp.src([])
		.pipe($.protractor.protractor({
			configFile: './protractor.conf.js',
		}))
		.on('end', function () {
			$.server.close();
			console.log("E2E Testing complete");
			process.exit(0);
		}).on('error', function(err) {
			console.error('E2E Test failed:');
			console.error(err);
			process.exit(1);
		})
	});
