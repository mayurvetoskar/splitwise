loginModule.controller('loginCtrl', ['$scope', '$log', '$state', function ($scope, $log, $state) {
    $scope.login = function () {
        $state.go('home');
    };

    $scope.register = function () {
        $state.go('registration');
    };
}]);