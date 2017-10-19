var app = angular.module('SplitWise', [
    'ui.router',
    'registration',
    'splitWiseFactories',
    'login'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
        abstract: true,
        url: ''
    });

    $urlRouterProvider.otherwise('/content');
});