<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function new(Request $request){
        if($request->hasFile('image')){
            if($request->file('image')->isValid()){
                $validated = $request->validate([
                    'name' => 'string|max:40',
                    'image' => 'mimes:jpeg,jpg,png,gif|max:4096',
                    'location' => 'string|max:20',
                                                ]);
                $extension = $request->image->extension();
                $storeString = $validated['location'] . '/' . $validated['name'].".".$extension;
                $request->image->storeAs('/public', $storeString);
                $url = Storage::url($storeString);
                $image = Image::create([
                    'name' => $validated['name'],
                    'url' => $url
                                       ]);
                Session::flash('success', "Success!");
                return $url;
            }
        }
        abort(500, 'Could not upload image :(');

//        //get all existing images, loop them
//        $existing = Storage::disk('public')->allFiles( $type .'/imageUpload');
//        var_dump($existing);
//        //must create new image file AFTER pulling all existing
//        //$path = $request->file('image')->storePublicly('public/'. $type .'/imageUpload');
//        $path = "public/$type/imageUpload";
//        var_dump($request->file('image'));
//        Storage::disk('public')->put($path, $request->file('image'));
//        var_dump('path');
//        var_dump($path);
//        $newImage = Image::fromFile($path);
//        var_dump('image');
//        var_dump($newImage);
//        foreach($existing as $existingImage){
//            //check each image for similarity to uploaded image
//            $existingImageFile = Image::fromFile($existingImage);
//            //if images are the same, return existing image url
//            $diff = $newImage->difference($existingImageFile);
//            var_dump($diff);
//            if($diff > 0.95){
//                //purge newImage from storage
//                Storage::disk('public')->delete($path);
//                return '/storage/' . substr($existingImage, 7);
//            }
//        }
//        //if loop finishes without a match, complete new upload
//        return '/storage/' . substr($path, 7);
    }

    public function check(Request $request){

    }
}
