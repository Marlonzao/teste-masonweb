app.directive('personCard', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/personCard/personCard.html',
        replace: true,
        scope: {
            person: '=person'
        },
        controller: ['$scope', '$rootScope', 'ngDialog','personsFactory', 'apiURL', function($scope, $rootScope, ngDialog, personsFactory, apiURL){
            $scope.photoURL = apiURL.photos();
            $scope.timestamp = +new Date;
            
            $scope.deletePerson = function(personID){
                swal({
                    title: 'Tem certeza?',
                    text: "A pessoa vai ser deletado!",
                    type: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Sim',
                    allowOutsideClick: false                    
                }).then(function(result){
                    if(result.value){
                        personsFactory.deletePerson(personID).then( function(result){
                            if(result){
                                $rootScope.$broadcast('updatePersons', true);
                            }
                        });
                    }
                })
            }

            $scope.editPerson = function(personID){
                ngDialog.open({
                    template: 'directives/personCard/dialog/editPerson/editPerson.html',
                    className: 'ngdialog-theme-default',
                    controller: 'EditPersonController',
                    width: '700px',
                    resolve: {
                        'personID': function(){
                            return personID;
                        }
                    }
                })
            }
        }]
    }
})