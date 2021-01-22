<?php

namespace App\Http\Controllers;

use App\Helpers\compareImages;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller {
    public function new(Request $request) {
        if ($request->hasFile('image')) {
            if ($request->file('image')->isValid()) {
                $validated      = $request->validate([
                                                         'name'     => 'string|max:40',
                                                         'image'    => 'mimes:jpeg,jpg,png,gif|max:4096',
                                                         'location' => 'string|max:20',
                                                     ]);
                $extension      = $request->image->extension();
                $storeString    = $validated['location'] . '/' . $validated['name'] . "." . $extension;
                $existingImages = Storage::disk('public')->files($validated['location']);
                $request->image->storeAs('/public', $storeString);
                $url          = Storage::url($storeString);
                $imageCompare = new compareImages(base_path() . '/storage/app/public/' . $storeString);
                $match        = false;
                foreach ($existingImages as $existingImage) {
                    $existinglocation = base_path() . '/storage/app/public/' . $existingImage;
                    if ($imageCompare->compareWith($existinglocation) < 11
                        || $imageCompare->compareHash($imageCompare->hashImage($existinglocation)) < 11) {
                        //images match
                        $match = true;
                        //remove image just added
                        Storage::disk('public')->delete($storeString);
                        //replace $url
                        $url = Storage::url($existingImage);
                        break;
                    }
                }
                if (!$match) {
                    //only when image is new
                    $image = Image::create([
                                               'name' => $validated['name'],
                                               'url'  => $url
                                           ]);
                }
                Session::flash('success', "Success!");
                return $url;
            }
        }
        abort(500, 'Could not upload image :(');
    }

    public function check(Request $request) {

    }
}
