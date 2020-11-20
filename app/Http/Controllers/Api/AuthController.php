<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;


class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only(['email','password']);

        if(!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Incorrect email/password'], 401);
        }
        return response()->json(['token' => $token]);
    }

    public function refresh(Request $request){
        try{
            $newToken = auth()->refresh();
        }catch(TokenInvalidException $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }
        return response()->json(['token' => $newToken]);
    }
}
