angular.module('maps', [ 'ui-leaflet', 'ui.router', 'services', 'directives' ])
.run(function() {
    // some basic bootstrap code...
})
.config(function($stateProvider, $urlRouterProvider) {
    var initialUrl = '/main';

    $stateProvider.state('main', {
        url : '/main',
        templateUrl: 'views/mapView.html'
    });
    // provide all other states/urls here

    $urlRouterProvider.otherwise(initialUrl);
});