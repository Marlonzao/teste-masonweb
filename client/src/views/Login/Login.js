app.controller('LoginController', ['$scope', '$rootScope', '$state', 'loginFactory', 'userFactory', 'toaster', 'ngDialog', function($scope, $rootScope, $state, loginFactory, userFactory, toaster, ngDialog){
    if(!$rootScope.mainLoading){
        userFactory.loadData().then(function(result){
            if(result){
                $state.go('Dashboard');
                $rootScope.$broadcast('mainLoading', true);
            }else{
                $scope.loaded = true;
            }
        });
    }


    $scope.login = function(){
        loginFactory.login($scope.email, $scope.password).then( function(result){
            if(result){
                toaster.pop('success', "Logado", "Logou com sucesso");
                $state.go('Dashboard');
            }else{
                toaster.pop('error', "Falha", "Falha na autenticação");                
            }
        });
    }

    $scope.register = function () {
        ngDialog.open({
            template: 'Login/Register/Register.html',
            className: 'ngdialog-theme-default',
            controller: 'RegisterController',
            width: '700px'
        });
    }
}]) 