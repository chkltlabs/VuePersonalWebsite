<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::truncate();
         //\App\Models\User::factory(10)->create();
        \App\Models\User::create([
            'name' => 'Erik',
            'email' => 'erik@erikgratz.com',
            'password' => Hash::make(env('DB_PASSWORD'))
                                 ]);
         $this->call([
             PostSeeder::class,
             ProjectSeeder::class,
             CommentSeeder::class,
                     ]);
    }
}
