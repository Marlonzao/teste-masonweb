app.run(function($rootScope) {
    $rootScope.user = {
        name: '',
        email: '',
        availableModules: '',
        bio: '',
        photo: ''
    }

    $rootScope.mainLoading = false;
})