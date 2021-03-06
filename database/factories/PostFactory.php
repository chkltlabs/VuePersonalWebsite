<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'user_id' => $this->faker->numberBetween(1, 4),
            'subtitle' => $this->faker->sentence(),
            'body' => "<p>{$this->faker->bs}</p><br><p>{$this->faker->bs}</p><br><p>{$this->faker->bs}</p><br><p>{$this->faker->bs}</p>",
            'created_at' => now(),
            'tags' => [$this->faker->word,$this->faker->word,$this->faker->word,$this->faker->word,$this->faker->word,]
        ];
    }
}
