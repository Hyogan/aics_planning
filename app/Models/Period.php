<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    use HasFactory;
    protected $fillable = [
        'start_time',
        'end_time',
        'day',
    ];

    /*
        Defining relationships with others tables
    */ 
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
    // public function events()
    // {
    //     return $this->hasMany(Event::class);
    // }

}
