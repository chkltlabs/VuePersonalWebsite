<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        \App\Models\User::truncate();
        //\App\Models\User::factory(10)->create();
        \App\Models\User::create([
                                     'name'     => 'Erik',
                                     'email'    => env('MIX_MASTER_EMAIL'),
                                     'password' => Hash::make(env('DB_PASSWORD'))
                                 ]);
        \App\Models\User::create([
                                     'name'     => 'Twosome',
                                     'email'    => 'twosome@erikgratz.com',
                                     'password' => Hash::make('twosome')
                                 ]);
        \App\Models\User::create([
                                     'name'     => 'Threesome',
                                     'email'    => 'threesome@erikgratz.com',
                                     'password' => Hash::make('threesome')
                                 ]);
        \App\Models\User::create([
                                     'name'     => 'Foursome',
                                     'email'    => 'foursome@erikgratz.com',
                                     'password' => Hash::make('foursome')
                                 ]);
        $this->call([
                        PostSeeder::class,
                        ProjectSeeder::class,
                        CommentSeeder::class,
                    ]);
    }
}
