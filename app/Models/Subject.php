<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
    ];

    /*
        Defining relationships with others tables
    */ 
    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function demands()
    {
        return $this->hasMany(Demand::class);
    }

    public function teachers()
    {
        return $this->belongsToMany(Teacher::class);
    }

    public function classrooms()
    {
        return $this->belongsToMany(Classroom::class);
    }
}
