var app = angular.module('myapp',['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {

    var state1 = {
        name: 'hello',
        url: '/hello',
        views:{
            '': {
                templateUrl: 'templates/00.txt',
            }
        }

    };

    $stateProvider.state(state1);
    //$urlRouterProvider.otherwise('mygoodboy');
});

