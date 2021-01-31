<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class TagsController extends Controller {

    public function all(Request $request) {
        $posts = Post::all();
        $rtn = $posts->reduce(function($carry, $item){
            foreach($item->tags as $tag){
                array_push($carry, $tag);
            }
            return $carry;
        },[]);
        sort($rtn);
        return response()->json(array_values(array_unique($rtn)));
    }

    public function unlock(Request $request, $tag) {

        $tagRules = config('frontend.tagRules');
        foreach ($tagRules as $tagString => $ruleArray) {
            if ($tag == $tagString
                || (isset($ruleArray['relatedTags'])
                    && in_array($tag, $ruleArray['relatedTags']))
            ) {
                if(isset($ruleArray['relatedTags'])) {
                    $related = $ruleArray['relatedTags'];
                    array_push($related, [$tagString]);
                    $ruleArray['relatedTags'] = $related;
                }

                return response()->json($ruleArray);
            }
        }


        //expected data structure is like the following
        $rtn = [
            'allow'    => true,
            'relatedTags' => [$tag],
        ];
        return response()->json($rtn);
    }
}
