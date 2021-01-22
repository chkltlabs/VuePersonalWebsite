<?php

namespace Tests\Feature;

use Tests\TestCase;

class GetApiContactTest extends TestCase
{
    public function testSuccess(){
       $this->json('GET','/api/contact')->assertExactJson(['contactInfo' => config('frontend.contactInfo')]);
    }
}
