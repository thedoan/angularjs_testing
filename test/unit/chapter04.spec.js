'use strict';

describe('Testing Controllers', function () {
	var $rootScope;
	var $scope;
	var $controller;

	beforeEach(module('chapter04'));
	//setup for testing controller
	beforeEach(inject(function (_$rootScope_,_$controller_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller = _$controller_;
		$controller('HomeCtrl', {
			$scope: $scope
		});
	}));

	describe('Getting started testing a controller', function () {
		it('should do something', function () {
			expect($scope.id).toBe('foo');
		});

	});

	describe('Testing initial state of a scope object', function () {
		it('should set the scope property id to the correct initial value', function () {
			expect($scope.id).toBe('foo');
		});

	});

	describe('Testing interactive scope changes using Protractor', function () {
		it('should do something', function () {
			expect($scope.id).toBe('foo');
		});

	});

});
