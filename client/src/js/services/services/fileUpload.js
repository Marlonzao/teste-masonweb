app.service('fileUpload', ['$http', 'apiURL', '$rootScope', function ($http, apiURL, $rootScope) {
    this.uploadFileToUrl = function (file, id) {
        var fd = new FormData();
        fd.append('file', file);

        return $http.post(apiURL.get()+'person/'+id+'/photo', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then( function(){
            return true
        }, function(){
            return false
        });
    }
}]);