<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostControllerTest extends TestCase {
    //use RefreshDatabase;

    public function testIndexSuccess() {
        $res = $this->json('GET', '/api/posts')
                    ->assertJsonStructure([
                                              'posts' => [
                                                  [
                                                  'id',
                                                  'created_at',
                                                  'updated_at',
                                                  'user_id',
                                                  'title',
                                                  'subtitle',
                                                  'body'
                                              ]
                                              ]
                                          ])
                    ->decodeResponseJson();
    }

    public function testViewSuccess() {
        $id  = 1;
        $res = $this->json('GET', '/api/post/' . $id)
                    ->assertJsonStructure([
                                              'post' => [
                                                  'id',
                                                  'created_at',
                                                  'updated_at',
                                                  'user_id',
                                                  'title',
                                                  'subtitle',
                                                  'body'
                                              ]
                                          ])
                    ->decodeResponseJson();
        $res->assertFragment(['id' => $id]);
    }
}
