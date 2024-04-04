<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demand extends Model
{
    use HasFactory;
    protected $fillable = [
        'numberOfOurs',
        'teacher_id',
        'classroom_id',
        'subject_id'  
    ];
        /**
     * Set  the relationships with others tables.
     *
     * @return array<string, string>
     */

     public function teacher() 
    {
        return $this->belongsTo(Teacher::class);
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }
    


}
