app.controller('HomeController', ['$scope', '$rootScope', 'personsFactory', 'toaster', 'ngDialog', function($scope, $rootScope, personsFactory, toaster, ngDialog){
    function updatePersons(){
        personsFactory.getMany(6).then(function(result){
            $scope.persons = result;
        });
    }

    updatePersons();

    $rootScope.$on('updatePersons', function(evt, data) {
        updatePersons();
    });

    $scope.searchPerson = function(searchTerm){
        if(searchTerm){
            personsFactory.searchPerson(searchTerm).then(function(result){
                if(result){
                    $scope.resultPersons = result;
                }else{
                    toaster.pop('error', 'Nada encontrado', 'Nenhum aluno encontrado');                
                }
            });    
        }else{
            $scope.resultPersons = null;
        }
    }

    $scope.addPerson = function(){
        ngDialog.open({
            template: 'Dashboard/Home/Cadastrar/Cadastrar.html',
            className: 'ngdialog-theme-default',
            controller: 'CadastroController',
            width: '700px'
        }).closePromise.then(function (data) {
            updatePersons();
        });
    }
}])