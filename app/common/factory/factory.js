angular.module('splitWiseFactories', [])
    .factory('splitWiseFactory', ['$http', '$log', function ($http, $log) {
        $log.log('factory initialized');
        return {
            submitRegistration: function (a, b, c) {
                //$http({
                //    method: 'POST',
                //    url: '',
                //    data: JSON.stringify({ 'userName': userName, 'emailAddr': emailAddr, 'password': password })
                //}).success(function (data) { }).error(function () { });
            }
        }
    }]);