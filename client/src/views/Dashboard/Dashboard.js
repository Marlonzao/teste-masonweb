app.controller('DashboardController', ['$scope', '$rootScope', '$state', 'userFactory', 'toaster', function($scope, $rootScope, $state, userFactory, toaster){
    if(!$rootScope.mainLoading){
        userFactory.loadData().then( function(){
            $scope.loaded = true;
            $state.go('Dashboard.Home');    
            $rootScope.$broadcast('mainLoading', true);
        }, function(){
            toaster.pop('error', "Falha", "Falha ao coletar dados, verifique sua conexão ou tente novamente mais tarde");            
        });
    }else{
        $scope.loaded = true;
    }

    $rootScope.$on('mainLoading', function(evt, data) {
        $scope.loaded = true;
    });

    $scope.sidebarToggle = function(){
        angular.element(document.querySelector('#body')).toggleClass('sidenav-toggled');        
    }
}]) 