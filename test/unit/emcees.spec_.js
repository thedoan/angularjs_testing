describe("Emcees Service", function() {
	beforeEach(module('services.emcees', {
		'beatjunkies': {
			'dj': 'Babu'
		}
	}, function($provide) {
		$provide.value('rapper', 'madchild');
	}));	
});
