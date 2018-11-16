angular.module('services', [])
.factory('$constService', function() {
    return {
        INITIAL_MAP_CENTER : {
            lat : 59.33258,
            lng : 18.0649
        }
    };
});
