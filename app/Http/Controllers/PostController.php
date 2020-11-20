<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\MyController as Controller;

class PostController extends Controller
{
    public function index(Request $request){
        $posts = Post::all();
        return response()->json(['posts' => $posts]);
    }
}
