registrationModule.controller('registrationCtrl', ['$scope', 'splitWiseFactory', function ($scope, splitWiseFactory) {

    $scope.submit = function () {
        splitWiseFactory.submitRegistration($scope.userName, $scope.emailAddr, $scope.password).then(function (data) {

        });
    }
}]);
