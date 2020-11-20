<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class NavigationTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testNav()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertSee('Erik V Gratz')
            ->press('Home')->assertSee('Home');
        });
    }
}
