<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','commentable_type', 'commentable_id', 'body',];
    protected $appends = ['user_this_replys_to'];
    protected $casts = [
        //'body' => 'array',
    ];

    public function commentable(){
        return $this->morphTo();
    }

    public function user(){
        return $this->hasOne(User::class, 'id','user_id');
    }

    public function getUserThisReplysToAttribute(){
        if($this->commentable_type == self::class){
            $parent = self::find($this->commentable_id);
            return $parent->user;
        }
        return null;
    }

    public function subComments(){
        return $this->morphMany(Comment::class, 'commentable')->with(['subComments', 'user']);
    }
}
