app.directive('sidebar', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/sidebar/sidebar.html',
        replace: true,
        scope: {
            user : '=user'
        },
        controller: ['$scope', '$timeout', function($scope, $timeout){
            $timeout(function(){ $scope.loaded = true; }, 1500);
            $scope.sideBar = {
                                0: {
                                    name: 'Início',
                                    route: 'Dashboard.Home',
                                    icon: 'fa-home'
                                },

                                1: {
                                    name:'Cardápio', 
                                    route: 'Dashboard.Menu', 
                                    icon: 'fa-bars'
                                }, 
                                
                                2: {
                                    name:'ChatBot', 
                                    route: 'undef', 
                                    icon: 'fa-cogs'
                                }, 
                                
                                3: {
                                    name:'Marketing', 
                                    route: 'undef', 
                                    icon: 'fa-chart-line'
                                }
                                // , 
                                
                                // 4: {
                                //     name: 'Agrupado', 
                                //     route: 'undef', 
                                //     icon: 'fa-tree', 
                                //     isTree: true, 
                                //     branchs: {
                                //                 0:{
                                //                     name: 'Branch1', 
                                //                     route: 'undef'
                                //                 }, 
                                //                 1:{
                                //                     name: 'Branch2', 
                                //                     route: 'undef'
                                //                 }, 
                                //                 2:{
                                //                     name: 'Branch3', 
                                //                     route: 'undef'
                                //                 }
                                //             }
                                //     },

                                // 5: {
                                //     name: 'Agrupado', 
                                //     route: 'undef', 
                                //     icon: 'fa-tree', 
                                //     isTree: true, 
                                //     branchs: {
                                //                 0:{
                                //                     name: 'Branch1', 
                                //                     route: 'undef'
                                //                 }, 
                                //                 1:{
                                //                     name: 'Branch2', 
                                //                     route: 'undef'
                                //                 }, 
                                //                 2:{
                                //                     name: 'Branch3', 
                                //                     route: 'undef'
                                //                 }
                                            // }
                            }
        }]
    }
})