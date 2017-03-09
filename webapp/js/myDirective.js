var app = angular.module("myApp", []);

app.directive("testDirective", function () {
    return {
        restrict : "EACM",
        template : "<h1>Made By a Directive!</h1>"
    };
});