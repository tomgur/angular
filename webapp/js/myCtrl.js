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
        {name: 'Kai', country: 'Lapland'},
        {name: 'Jani', country: 'US'},
        {name: 'Carl', country: 'Israel'},
        {name: 'Margareth', country: 'Germany'},
        {name: 'Hege', country: 'Netherlands'},
        {name: 'Joe', country: 'Italy'},
        {name: 'Gustav', country: 'Russia'},
        {name: 'Birgit', country: 'Ukraine'},
        {name: 'Mary', country: 'Portugal'},
        {name: 'Kai', country: 'Thailand'}]

    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});

app.controller('costCtrl', function ($scope) {
    $scope.price = 66;
});

// custom filter
app.filter('myFormat', function () {
    return function (x) {
        var i, c, txt = "";
        for (var i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    }
})