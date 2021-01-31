<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'user_id', 'subtitle','body', 'tags'];
    protected $casts = ['tags' => 'array'];


    public function scopeTagged($query, $tag) {
        return $query->where('tags', 'LIKE', $tag);
    }

    //Relationships
    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function comments(){
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function images(){
        return $this->morphToMany(Image::class, 'imageable');
    }

}
