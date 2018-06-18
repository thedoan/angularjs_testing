angular.module('app', [])
	.controller('PasswordController', function PasswordController($scope) {
		$scope.password = '';
		$scope.grade = function() {
			var size = $scope.password.length;
			if (size > 8) {
				$scope.strength = 'strong';
			} else if (size > 3) {
				$scope.strength = 'medium';
			} else {
				$scope.strength = 'weak';
			}
		};
	})
	.factory('myService', ['backendService', function($backend) {
		return {
			test: function(msg) {
				return "Returned message:" + $backend.echo(msg);
			}
		};
	}])
	.filter('length', function() {
		return function(text) {
			return ('' + (text || '')).length;
		}
	})
	.directive('aGreatEye', function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
		};
	});
