var app = angular.module("myApp", []);

// Element name Directive 

app.directive("elementDirective", function () {
    return {
        restrict: "E",
        template: "<h6> This is Element Directive </h6>"
    };
});


// Attribute Directive

app.directive("attributeDirective", function () {
    return {
        restrict: "A",
        template: "<h6> This is Attribute Directive</h6>"
    };
});


// Class Directive

app.directive("classAttribute", function () {
    return {
        restrict: "C",
        template: "<h6> This is Class Directive"
    };
});


//comment Directive

app.directive("commentDirective", function () {
    return {

        restrict: "M",
        replace: true,
        template: "<h6> This is Comment Directive"
    }
});