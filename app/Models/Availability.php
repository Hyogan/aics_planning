<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    use HasFactory;
    protected $fillable = ['day', 'start_time', 'end_time','teacher_id'];
        /**
     * Set the relationships with others tables .
     *
     * @return array<string, string>
     */

    public function teacher() 
    {
        return $this->belongsTo(Teacher::class);
    }
}
