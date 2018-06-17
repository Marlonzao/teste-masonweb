app.directive('sidebar', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/sidebar/sidebar.html',
        replace: true,
        scope: {
            user : '=user'
        },
        controller: ['$scope', '$rootScope', function($scope, $rootScope){
            $rootScope.$on('mainLoading', function(evt, data) {
                $scope.loaded = true;
            });
            
            $scope.sideBar = {
                'home': {
                    name: 'Início',
                    route: 'Dashboard.Home',
                    icon: 'fa-home'
                }
            }
        }]
    }
})