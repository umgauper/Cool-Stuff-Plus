//$('.bxslider').bxSlider(); this line fucks up the slider completely, images load though...
var app = angular.module('myApp', [])

    .controller('panelController',['$scope', function($scope) {
        $scope.selected = 'refrig';
        $scope.isActive = true;
        $scope.setActive = function() {
            $scope.isActive = !$scope.isActive;
        };
        $('.bxslider').bxSlider();


    }]);

