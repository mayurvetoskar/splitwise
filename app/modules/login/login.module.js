var loginModule = angular.module('login', []).config(function ($stateProvider) {
    $stateProvider.state('content', {
        url: '/content',
        templateUrl: 'modules/login/template/login.html',
        controller: 'loginCtrl',
        title: 'Login'
    })
})