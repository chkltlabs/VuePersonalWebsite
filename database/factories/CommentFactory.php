<?php

namespace Database\Factories;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    public $commentable_type_options = [
        'App\Models\Post',
        //'App\Models\Comment',
        'App\Models\Project',
    ];

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $i = $this->faker->numberBetween(0, count($this->commentable_type_options)-1);
        $type = $this->commentable_type_options[$i];
        $ids = array_column($type::all()->toArray(), (new $type())->getKeyName());
        $id = $ids[$this->faker->numberBetween(1, count($ids))-1];
        if(Comment::count() > 35 && !in_array('App\Models\Comment', $this->commentable_type_options)){
            $this->commentable_type_options = ['App\Models\Comment'];
        }
        return [
            'user_id' => $this->faker->numberBetween(1,4),
            'commentable_type' => $type,
            'commentable_id' => $id,
            'body' => $this->faker->bs
        ];
    }
}
