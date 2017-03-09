app.controller('myCtrl', function ($scope) {
    $scope.myCol = "lightBlue";
    $scope.person = {surname: 'Gur', christianName: 'Tom'};
    $scope.quantity = 5;
    $scope.cost = 5;
    $scope.points = [1, 2, 3, 4, 5];
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.name = "Meytal Cohen";
    $scope.firstName = "Meytal";
    $scope.lastName = "Cohen";

    $scope.changeName = function () {
        if ($scope.firstName == "Meytal") {
            $scope.firstName = "Tom"
        } else {
            $scope.firstName = "Meytal"
        }
    };

    $scope.fullName = function () {
        return $scope.firstName + ' ' + $scope.lastName;
    };
});

app.controller('namesCtrl', function ($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Japan'},
        {name: 'Kai', country: 'Lapland'}];
});