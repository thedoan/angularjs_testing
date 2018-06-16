describe('MainCtrl', function () {
	var mainCtrl, scope, element;
	beforeEach(module('cookbook'));
	beforeEach(inject(function ($controller, $rootScope, $compile) {
		scope = $rootScope.$new();
		scope.emcee = 'Izzy Ice';
		$controller('MainCtrl', {
			$scope: scope
		});
		element = angular.element('<emcee></emcee>');
	}));
	it('should assign the correct rapper to scope', function() {
		expect(scope.emcee).toEqual('Kool G Rap');
	});
});
