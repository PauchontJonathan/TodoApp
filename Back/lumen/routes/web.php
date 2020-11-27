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
$router->get('/listByUser/{id}', 'ListController@getAllListsWithTasks');

// route to create a list
$router->post('/list/create', 'ListController@createList');

// route to delete a list
$router->delete('/list/delete/{id}', 'ListController@deleteList');

// route to update a list
$router->post('/list/update', 'ListController@updateList');

//route to send datas to the user
$router->post('/user/datas/', 'UserController@getUserDatas');

//route to delete one task 
$router->delete('/task/delete/{id}', 'TaskController@deleteTask');

//route to create a task
$router->post('/task/create', 'TaskController@createTask');

//route to update a task
$router->post('/task/update', 'TaskController@updateTask');

//route to validate a task
$router->post('/task/validate', 'TaskController@validateTask');