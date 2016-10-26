angular.module("homeModule",[])
	.controller("homeCtrl",["$scope","$css"],function($scope,$css){
		$css.add("./view/home/home.css");
		$scope.num = 125;
	})