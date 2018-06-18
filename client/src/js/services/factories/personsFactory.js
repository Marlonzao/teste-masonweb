app.factory('personsFactory', ['$http', 'apiURL', function($http, apiURL) {
    var personsFactory = {};
    var baseURL = apiURL.get()+'person'; 
    
    personsFactory.get = function(personID){
        return $http.get(baseURL+'/'+personID).then( function(result){
            return result.data;
        }, function(result){
            return false
        })
    }    

    personsFactory.getMany = function(quantity){
        return $http.get(baseURL+'/get/'+quantity).then( function(result){
            return result.data;
        }, function(result){
            return false
        })
    }    

    personsFactory.searchPerson = function(searchTerm){
        return $http.get(baseURL+'/search/'+searchTerm).then( function(result){
            return result.data;
        }, function(result){
            return false
        })        
    }

    personsFactory.addPerson = function(person){
        return $http.post(baseURL+'/add', person).then( function(result){
            return result.data
        }, function(result){
            return false
        })
    }

    personsFactory.editPerson = function(person){
        return $http.put(baseURL+'/'+person.id, person).then( function(result){
            return true
        }, function(result){
            return false
        })
    }

    personsFactory.deletePerson = function(personID){
        return $http.delete(baseURL+'/delete/'+personID).then( function(result){
            return true
        }, function(result){
            return false
        })
    }

    return personsFactory;
}]);