<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'subtitle','body'];




    //Relationships
    public function user(){
        return $this->hasOne('user', 'id', 'user_id');
    }

    public function comments(){
        return $this->morphMany('App\Models\Comment', 'commentable');
    }

}
