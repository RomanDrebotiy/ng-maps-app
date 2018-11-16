angular.module('directives', [])
.directive('map', function() {
    return {
        restrict : 'E',
        controller: function($scope) {
            angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 4
                }
            });
        },
        template: '<leaflet lf-center="london" width="100%" height="480px"></leaflet>'
    }
});
