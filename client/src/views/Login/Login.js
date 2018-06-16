app.controller('LoginController', ['$scope', '$rootScope', 'loginFactory', 'userFactory', 'toaster', '$state', '$timeout', function($scope, $rootScope, loginFactory, userFactory, toaster, $state, $timeout){
    userFactory.loadData().then(
        function(result){
            if(result){
                $state.go('Dashboard');
            }else{
                $scope.loaded = true;            
            }
        }
    );

    $scope.login = function(){
        loginFactory.login($scope.email, $scope.password).then(function(result){
            toaster.pop('success', "Logado", "Logou com sucesso");
            $state.go('Dashboard');
        }, function(result){
            toaster.pop('error', "Falha", "Falha na autenticação");                
        });
    }
}]) 