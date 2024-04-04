<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Daa extends User
{
    use HasFactory;
    
    protected $table = "daas";
    public function user() {
        return $this->belongsTo(User::class);
    }
}
