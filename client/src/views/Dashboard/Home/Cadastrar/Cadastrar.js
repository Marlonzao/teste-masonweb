app.controller('CadastroController', ['$scope', 'ngDialog', 'fileUpload', 'personsFactory', function($scope, ngDialog, fileUpload, personsFactory){
    $scope.send = function(person, myFile){
        personsFactory.addPerson(person).then(function(id){
            console.log(id);
            if(id){
                fileUpload.uploadFileToUrl(myFile, id).then( function(result){
                    if(result){
                        swal('Feito!', 'Pessoa adicionada com sucesso.', 'success')    
                        ngDialog.closeAll();
                    }
                })
            }
        });
    };
}]) 