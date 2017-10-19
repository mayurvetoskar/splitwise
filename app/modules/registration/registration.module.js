var registrationModule = angular.module('registration', []).config(function ($stateProvider) {
    $stateProvider.state('registration', {
        url: '/registration',
        templateUrl: 'modules/registration/template/registration.html',
        controller: 'registrationCtrl',
        title: 'Registration'
    })
});

