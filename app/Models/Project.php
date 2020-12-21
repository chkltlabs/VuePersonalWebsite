<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = ['title','image','date_posted','link','description'];
    protected $dates = ['date_posted'];
    protected $casts = ['description'=> 'array'];
    protected $appends = ['date_posted_human'];


    public function getDatePostedHumanAttribute(){
        return Carbon::parse($this->date_posted)->diffForHumans();
    }
}
