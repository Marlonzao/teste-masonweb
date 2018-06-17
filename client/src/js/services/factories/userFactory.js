app.factory('userFactory', ['$http', 'apiURL', '$rootScope', function($http, apiURL, $rootScope) {
    var userFactory = {};
    var baseURL = apiURL.get()+'auth/'; 

    userFactory.loadData = function(){
        if(!$rootScope.mainLoading){
            return $http.get(baseURL+'user').then( function(result){                
                if(result.status==200){
                    $rootScope.$broadcast('mainLoading', true);
                
                    $rootScope.mainLoading          = true;
                    $rootScope.user.name        = result.data.data.name;
                    $rootScope.user.firstName   = result.data.data.name.split(' ').slice(0, 1).join(' ');
                    $rootScope.user.email       = result.data.data.email;
    
                    $rootScope.user.availableModules    = {'home': true};
                    $rootScope.user.bio = 'Programador Ninja'
                    $rootScope.user.photo = 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg'
                    return true
                }
                return false
            }, function(result){
                return false
            });    
        }
    }

    return userFactory;
}]);