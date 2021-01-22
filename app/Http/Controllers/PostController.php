<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\MyController as Controller;

class PostController extends Controller {
    public function index(Request $request) {
        $posts = Post::all();
        return response()->json(['posts' => $posts]);
    }

    public function view(Request $request, $id) {
        $post = Post::find($id);
        return response()->json(['post' => $post]);
    }

    public function add(Request $request) {
        $data  = $request->all();
        $attrs = [
            'title'     => $data['title'],
            'subititle' => $data['subtitle'],
            'body'      => $data['body']
        ];
        $new   = Post::create($attrs);
        $new->save();
        return response()->json(['newPost' => $new]);
    }

    public function update(Request $request, $id) {
        $original           = Post::find($id);
        $data               = $request->all();
        $original->title    = $data['title'];
        $original->subtitle = $data['subtitle'];
        $original->body     = $data['body'];
        $original->save();
        return response()->json(['item' => $original->toArray()]);
    }

    public function delete(Request  $request, $id){
        $post = Post::find($id);
        $post->delete();
    }
}
