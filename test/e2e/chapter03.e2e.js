'use strict';

describe('How To Test Navigation And Routing', function () {

	beforeEach(function () {
		browser.get('http://localhost:8000/chapter03.html');
	});

	it('should default to home page', function () {
		expect(browser.getCurrentUrl()).toContain('/home');
	});

	it('should redirect to home page if an unknown url is provided', function () {
		browser.get('http://localhost:8000/chapter03.html#/dummy');
		expect(browser.getCurrentUrl()).toContain('/home');
	});

	it('should show a load button on home page', function () {
		var button = element(by.buttonText('load'));
		expect(button.isPresent()).toBeTruthy();
	});

	it('should navigate to emcees page on click of the load button', function () {
		var button = element(by.buttonText('load'));
		button.click();
		expect(browser.getCurrentUrl()).toContain('/emcees/1');
	});

});
