app.factory('loginFactory', ['$http', 'apiURL', '$rootScope', function($http, apiURL, $rootScope) {
    var loginFactory = {};
    var baseURL = apiURL.get()+'auth/';

    loginFactory.login = function(email, password){
        return $http.post(baseURL+'login', {'email': email, 'password': password}).then(
            function(result){
                localStorage.setItem("id_token", result.data.data.token);
                return true    
            }, function(result){
                return false
            }
        );
    }

    logout = function(){
        $rootScope.user = $rootScope.mainLoading = false;
        localStorage.removeItem("id_token");
        return true;
    }


    loginFactory.logout = function(){
        return $http.delete(baseURL+'invalidate').then(function(){
            return logout();
        }, function(){
            return logout();
        });
    }

    return loginFactory;
}]);