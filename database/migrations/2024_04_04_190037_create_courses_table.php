<?php

use App\Models\Classroom;
use App\Models\Period;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\Timetable;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Timetable::class);
            $table->foreignIdFor(Period::class);
            $table->foreignIdFor(Subject::class);
            $table->foreignIdFor(Teacher::class);
            $table->foreignIdFor(Classroom::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
