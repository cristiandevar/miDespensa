<?php

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
        Schema::create('unitmeasures', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('unitmeasure_name');
            $table->string('unitmeasure_abbreviation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unitmeasures');
    }
};
