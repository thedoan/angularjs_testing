'use strict';
describe('Grand father unit testing', function() {
	var $scope;
	var $rootScope;
	var $controller;

	beforeEach(module('GrandfatherOfAllKnowledgeApp'));
	beforeEach(inject(function(_$controller_, _$rootScope_){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller('GrandfatherCtrl', {
			$scope: $scope	
		});
	}));
	it('Should empty question', function() {
		expect($scope.question).toEqual({});
	});
	it('Should empty answer', function() {
		expect($scope.answer).toBe('');
	});
	it('Should answer question correct', function() {
		$scope.answerQuestion();
		expect($scope.answer).toEqual('Chocolate!');
	});
});
