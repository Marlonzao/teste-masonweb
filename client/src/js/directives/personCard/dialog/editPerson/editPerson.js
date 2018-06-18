app.controller('EditPersonController', ['$scope', '$rootScope', 'personID', 'personsFactory', 'fileUpload', function($scope, $rootScope, personID, personsFactory, fileUpload){
    personsFactory.get(personID).then( function(resultPerson){
        $scope.person = resultPerson;
        $scope.loaded = true;
    })

    $scope.send = function(person, myFile){
        close = function(){
            swal('Feito!', 'Pessoa Editada com sucesso.', 'success')    
            $rootScope.$broadcast('updatePersons', true);
            $scope.closeThisDialog();
        }

        console.log(myFile)
        personsFactory.editPerson(person).then(function(result){
            if(result){
                if(myFile){
                    fileUpload.uploadFileToUrl(myFile, person.id).then( function(result){
                        if(result){close();}
                    })
                }else{close();}                
            }
        });
    }
}])