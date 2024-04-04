<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;
    protected $fillable = ['name','level','description','teacher_id'];

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
    public function students()
    {
        return $this->hasMany(Student::class);
    }
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }

}
