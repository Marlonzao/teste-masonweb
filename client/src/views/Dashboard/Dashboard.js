app.controller('DashboardController', ['$scope', '$state', '$rootScope', 'userFactory', 'toaster', function($scope, $state, $rootScope, userFactory, toaster, studentFactory){
    userFactory.loadData().then(
        function(result){
            if(result){
                if(userFactory.loadData){$scope.loaded = true;}
            }else{
                toaster.pop('error', "Falha", "Falha ao coletar dados, verifique sua conexão ou tente novamente mais tarde");        
            }
        }
    );

    $scope.sidebarToggle = function(){
        angular.element(document.querySelector('#body')).toggleClass('sidenav-toggled');        
    }

    $state.go('Dashboard.Home');    
}]) 