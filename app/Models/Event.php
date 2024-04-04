<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'start_time',
        'end_time',
        'day',
    ];

    /*
        Defining relationships with others tables
    */ 
    public function timetable()
    {
        return $this->belongsTo(Timetable::class);
    }

    public function period()
    {
        return $this->belongsTo(Period::class);
    }
}
