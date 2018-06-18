<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api = $app->make(Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api) {
    $api->get('/test', function(){
        return('test');
    });

    //------------------------------------- Person Related

    $api->group(['prefix'=>'person'], function ($api) {
        $api->put('/{id}', [
            'uses' => 'App\Http\Controllers\PersonController@editPerson',
            'as' => 'api.person.edit'
        ]);
        $api->post('/add', [
            'uses' => 'App\Http\Controllers\PersonController@addPerson',
            'as' => 'api.person.add'
        ]);
        $api->post('/{id}/photo', [
            'uses' => 'App\Http\Controllers\PersonController@uploadPhoto',
            'as' => 'api.person.photo'
        ]);
        $api->delete('/delete/{id}', [
            'uses' => 'App\Http\Controllers\PersonController@deletePerson',
            'as' => 'api.person.delete'
        ]);
        $api->get('/{id}', [
            'uses' => 'App\Http\Controllers\PersonController@getByID',
            'as' => 'api.person.getByID'
        ]);
        $api->get('/get/{quantity}', [
            'uses' => 'App\Http\Controllers\PersonController@getMany',
            'as' => 'api.person.getMany'
        ]); 
        $api->get('/search/{searchTerm}', [
            'uses' => 'App\Http\Controllers\PersonController@search',
            'as' => 'api.person.search'
        ]);
    });
    
    //------------------------------------- Auth Related
    
    $api->post('/auth/login', [
        'uses' => 'App\Http\Controllers\Auth\AuthController@postLogin',
        'as' => 'api.auth.login',
    ]);

    $api->post('/register/user', [
        'uses' => 'App\Http\Controllers\Auth\AuthController@registerUser',
        'as' => 'api.register.user',
    ]);

    $api->group(['middleware' => 'api.auth'], function ($api) {
        $api->get('/auth/user', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@getUser',
            'as' => 'api.auth.user'
        ]);
        $api->patch('/auth/refresh', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@patchRefresh',
            'as' => 'api.auth.refresh'
        ]);
        $api->delete('/auth/invalidate', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@deleteInvalidate',
            'as' => 'api.auth.invalidate'
        ]);
    });
});
