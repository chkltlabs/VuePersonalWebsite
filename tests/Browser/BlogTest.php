<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BlogTest extends DuskTestCase
{
    protected $user;

    protected function setUp(): void {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testBlog()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/blog')
                    ->assertSee('Blog');
        });
    }
}
