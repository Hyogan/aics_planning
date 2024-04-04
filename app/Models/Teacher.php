<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends User
{
    use HasFactory;
    
    protected $table = "teachers";
    protected $fillable = [
        'phone',
        'user_id'  
    ];
        /**
     * Set  the relationships with others tables.
     *
     * @return array<string, string>
     */

     public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function availabilities() 
    {
        return $this->hasMany(Availability::class);
    }
    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }

    public function demands()
    {
        return $this->hasMany(Demand::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

}
