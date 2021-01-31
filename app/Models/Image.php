<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'url', 'imageable_id', 'imageable_type'];

    //----------------
    //Relationships
    //----------------

    public function posts(){
        return $this->morphedByMany(Post::class, 'imageable');
    }

    public function projects(){
        return $this->morphedByMany(Project::class, 'imageable');
    }

}
