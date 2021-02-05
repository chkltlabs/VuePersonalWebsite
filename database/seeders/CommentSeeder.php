<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::truncate();
        $factory = Comment::factory();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();
        $factory->times(40)->create();

        Comment::create([
            'user_id' => 1,
            'commentable_id' => 0,
            'commentable_type' => \App\Models\Post::class,
            'body' => "Slob on the knob",
                        ]);

    }
}
