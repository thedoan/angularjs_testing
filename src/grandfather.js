'use strict';

/**
 *  *
 *   */
angular.module('GrandfatherOfAllKnowledgeApp', [])
	.controller("GrandfatherCtrl", GrandfatherCtrl);

function GrandfatherCtrl($scope) {
	$scope.question = {};
	$scope.answer = '';

	$scope.answerQuestion = function() {
		$scope.answer = "Chocolate!";
	}
}
