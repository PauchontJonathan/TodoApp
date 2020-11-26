<?php

/** @var \Laravel\Lumen\Routing\Router $router */

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

$router->get('/', function () use ($router) {
    return $router->app->version();
});


// route to insert one user
$router->post('/signup', 'UserController@signup');

// route to connect one user 
$router->post('/signin', 'UserController@signin');

// route to send all lists own by one user
$router->get('/listByUser/{id}', 'ListController@getAllLists');

// route to create a list
$router->post('/list/create', 'ListController@createList');

// route to delete a list
$router->post('/list/delete', 'ListController@deleteList');

// route to update a list
$router->post('/list/update', 'ListController@updateList');

//route to send datas to the user
$router->post('/user/datas/', 'UserController@getUserDatas');

//route to get all tasks by lists
$router->get('/task/all/{id}', 'TaskController@getAllTasks');