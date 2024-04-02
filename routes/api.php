<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
Route::get('/user', function (Request $request) {
    if($request->user())
        return $request->user();
    else 
        return response()->json(['message' => 'user not connected'], 403);
})->middleware('auth:sanctum');

Route::prefix('user/')->group(function(){
    Route::post('/login',   [AuthController::class,'login']);
    Route::post('/register', [AuthController::class,'register']);
    Route::post('/logout',  [AuthController::class,'logout'])->middleware('auth:sanctum');
});
