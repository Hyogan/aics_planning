<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'timetable_id',
        'period_id',
        'subject_id',
        'teacher_id',
        'classroom_id'
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

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

}
