<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\MyController as Controller;

class VueController extends Controller
{
    public function index(){
        return view('vue');
    }
}
