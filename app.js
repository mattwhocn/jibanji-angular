var  app = angular.module('myApp',["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.when('','/home');//路由重定向
	// $urlRouterProvider.otherwise('/home');//路由重定向
	$stateProvider.state('home',{//路由配置：声明名，声明配置
		url:'/home',
		templateUrl:'view/home/home.html'
	})
	.state('classroom',{
		url:'/classroom',
		templateUrl:'view/classroom/classroom.html'
	})
	.state('find',{
		url:'/find',
		templateUrl:'view/find/find.html'
	})
	.state('mine',{
		url:'/mine',
		templateUrl:'view/mine/mine.html'
	})
	.state('mine.profile',{
		url:'/profile',
		templateUrl:'view/profile/profile.html'
	})
	.state('mine.school',{
		url:'/school',
		templateUrl:'view/school/school.html'
	})
	.state('mine.setting',{
		url:'/setting',
		templateUrl:'view/setting/setting.html'
	})
})