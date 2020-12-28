<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','commentable_type', 'commentable_id', 'body',];
    protected $casts = [
        'body' => 'array',
    ];

    public function commentable(){
        return $this->morphTo();
    }

    public function user(){
        return $this->hasOne('App\Models\User', 'id','user_id');
    }

    public function parentComment(){
        return $this->attributes['commentable_type'] == Comment::class
            ? $this->morphMany(Comment::class, 'commentable')
            : null ;
    }
}
