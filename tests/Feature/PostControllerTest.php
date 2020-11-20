<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    //use RefreshDatabase;

    public function testIndexSuccess(){
        $res = $this->json('GET','/api/posts')->baseResponse;
        $this->assertContainsOnlyInstancesOf(Post::class, $res->original['posts']);
        foreach($res->original['posts'] as $post){
            $this->assertIsString($post->title);
            $this->assertIsString($post->subtitle);
            $this->assertContainsOnly('string', $post->body);
        }
    }
}
