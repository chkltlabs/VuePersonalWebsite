<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','commentable_type', 'commentable_id', 'body',];

    public function commentable(){
        return $this->morphTo();
    }

    public function parentComment(){
        return $this->attributes['commentable_type'] == 'App\Models\Comment'
            ? $this->morphMany('App\Models\Comment', 'commentable')
            : null ;
    }
}
