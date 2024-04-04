<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    use HasFactory;
    protected $fillable = [
        'start_date',
        'end_date',
        'number_of_day'
    ];

    /*
        Defining relationships with others tables
    */ 
    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
