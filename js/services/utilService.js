angular.module('services', [])
.factory(
    '$utilService',
    [
        '$constService',
        function($constService) {

            var _strings = {
                // just for example
                isNotBlank : function(s) {
                    return s && s.trim().length !== 0;
                }
            };
            
            var _geo = {
                // just for example
                getCountryForPoint: function(lat, lng) {
                    if (lat == $constService.INITIAL_MAP_CENTER.lat 
                        && lng == $constService.INITIAL_MAP_CENTER.lng) {
                        return 'UA';
                    }
                    return '';
                }
            };

            return {
                strings: _strings,
                geo: _geo
            };

        } 
    ]
);
