describe("The grandfather of all knowledge", function() {
	var question = element(by.model('question.text'));
	var answer = element(by.binding('answer'));
	var button = element(by.className('question__button'));

	beforeEach(function() {
		browser.get('http://localhost:8000/grandfather.html');
	});

	it('should answer any question', function() {
		question.sendKeys("What is the purpose of meaning?");
		button.click();
		expect(answer.getText()).toEqual("Chocolate!");
	});

	it('should not allow empty questions', function() {
		question.sendKeys("    ");
		expect(button.isEnabled()).toBeFalsy();
	});
});
