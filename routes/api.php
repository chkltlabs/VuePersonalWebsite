<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [
    'uses' => '\App\Http\Controllers\Api\AuthController@login'
]);

Route::get('/refresh',[
    'uses' => '\App\Http\Controllers\Api\AuthController@refresh'
]);

Route::get('/posts',[
    'uses' => '\App\Http\Controllers\PostController@index'
]);

Route::get('/post/{id}',[
    'uses' => '\App\Http\Controllers\PostController@view'
]);

Route::post('/post/{id}/update',[
    'uses' => '\App\Http\Controllers\PostController@update'
]);

Route::delete('/post/{id}/delete',[
    'uses' => '\App\Http\Controllers\PostController@delete'
]);

Route::get('/portfolio',[
    'uses' => '\App\Http\Controllers\ProjectController@index'
]);

Route::get('/contact', function(){
    return response()->json(config('frontend'));
});

Route::post('/images/new', [
    'uses' => '\App\Http\Controllers\ImageController@new'
]);

Route::post('/images/check',[
    'uses' => '\App\Http\Controllers\ImageController@check'
]);

Route::get('/unlock/{tag}', [
    'uses' => '\App\Http\Controllers\TagsController@unlock'
]);

Route::get('/allTags/', [
    'uses' => '\App\Http\Controllers\TagsController@all'
]);
