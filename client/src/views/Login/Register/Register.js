app.controller('RegisterController', ['$scope', 'userFactory', 'toaster', 'ngDialog', function($scope, userFactory, toaster, ngDialog){
    $scope.send = function(){
        if($scope.register.password != $scope.register.confirm_password){
            toaster.pop('error', 'Senhas diferentes', '');
            return
        }

        userFactory.register($scope.register).then(function(result){
            if(result){
                toaster.pop('success', 'Usuário cadastrado com sucesso', '');
                ngDialog.closeAll();
            }
        });
    }
}]) 