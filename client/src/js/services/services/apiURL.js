app.service('apiURL', ['$location', function($location) {
    this.get = function(){
        if ($location.host() === "localhost")
            return $location.protocol() + "://" + $location.host() + "/refeitorio/backend/public/api/";
    };
}]);