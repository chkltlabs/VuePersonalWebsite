<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'user_id', 'subtitle','body'];
    protected $casts = [
        'body' => 'array',
    ];




    //Relationships
    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function comments(){
        return $this->morphMany(Comment::class, 'commentable');
    }

}
