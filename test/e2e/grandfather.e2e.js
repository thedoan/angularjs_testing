var GrandfatherOfAllKnowledge = require('./page-objects/grandfather.pageObject');
describe("The grandfather of all knowledge", function() {
	var grandfatherOfAllKnowledge = new GrandfatherOfAllKnowledge();

	beforeEach(function() {
		browser.get('http://localhost:8000/grandfather.html');
	});

	it('should answer any question', function() {
		grandfatherOfAllKnowledge.askQuestion("What is the purpose of meaning?");
		expect(grandfatherOfAllKnowledge.answer.getText()).toEqual("Chocolate!");
	});

	it('should not allow empty questions', function() {
		grandfatherOfAllKnowledge.askQuestion("    ");
		expect(grandfatherOfAllKnowledge.button.isEnabled()).toBeFalsy();
	});
});
