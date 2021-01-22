<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImageControllerTest extends TestCase
{
    public function testNew(){
        $res = $this->post('/api/images/new',
                           ['image' => UploadedFile::fake()->image('assbutt.jpeg'),
                               'location' => 'blog',
                               'name' => 'assbutt'])
                    ->getContent();
        $this->assertNotFalse(strpos($res, 'assbutt'));
    }

    public function testImageMatching(){
        Storage::disk('public')->deleteDirectory('blog');
        $image = UploadedFile::fake()->image('testImage.png');
        $existing1 = Storage::disk('public')->allFiles('blog');
        $res1 = $this->post('/api/images/new',
                           ['image' => $image,
                            'location' => 'blog',
                            'name' => 'testImage1'])
                    ->getContent();
        $existing2 = Storage::disk('public')->allFiles('blog');
        $this->assertNotEquals($existing1, $existing2);
        $res2 = $this->post('/api/images/new',
                            ['image' => $image,
                             'location' => 'blog',
                             'name' => 'testImage2'])
                     ->getContent();
        $existing3 = Storage::disk('public')->allFiles('blog');
        $this->assertEquals($existing2, $existing3);
        $this->assertEquals($res1, $res2);
        $res3 = $this->post('/api/images/new',
                            ['image' => $image,
                             'location' => 'blog',
                             'name' => 'testImage3'])
                     ->getContent();
        $existing4 = Storage::disk('public')->allFiles('blog');
        $this->assertEquals($existing3, $existing4);
        $this->assertEquals($res2, $res3);
    }
}
