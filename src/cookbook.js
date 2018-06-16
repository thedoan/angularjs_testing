angular.module('cookbook', [])
	.controller('MainCtrl', ['$scope', function($scope) {
		$scope.emcee = 'Kool G Rap';
}])
	.directive('emcee', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				scope.onClick = function() {
					element.text('Step up' + scope.emcee + '!');
				}	
			}
		};
	});
