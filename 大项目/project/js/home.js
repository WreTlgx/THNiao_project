var app=angular.module('myapp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	var state1 = {
		name:'1',
		url:'yes',
		template:'<p>isYES</p>'
	};
	$stateProvider.state(state1);
	$urlRouterProvider.othermise('yes');
});