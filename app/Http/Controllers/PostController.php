<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\MyController as Controller;

class PostController extends Controller {
    public function index(Request $request) {
        $posts = Post::with([
                                'comments',
                            ])->get();
        return response()->json(['posts' => $posts]);
    }

    public function view(Request $request, $id) {
        $post = Post::with([
                               'comments',
                           ])->find($id);
        return response()->json(['post' => $post]);
    }

    public function add(Request $request) {
        $data  = $request->all();
        $attrs = [
            'title'     => $data['title'],
            'subititle' => $data['subtitle'],
            'body'      => $data['body'],
            'tags'      => $data['tags'],
        ];
        $new   = Post::create($attrs);
        $new->save();
        return response()->json(['newPost' => $new]);
    }

    public function update(Request $request, $id) {
        $original = Post::find($id);
        $data     = $request->all();
        if (isset($data['tags'])) {
            $data['tags'] = (array)json_decode($data['tags']);
        }
        $original->update($data);
        $original->save();
        return response()->json(['item' => $original->toArray()]);
    }

    public function delete(Request $request, $id) {
        $post = Post::find($id);
        $post->delete();
    }
}
