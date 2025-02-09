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
        Schema::table('unit_measures', function (Blueprint $table) {
            $table->renameColumn('unitmeasure_name', 'name');
            $table->renameColumn('unitmeasure_abbreviation', 'abbreviation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('unit_measures', function (Blueprint $table) {
            $table->renameColumn('name', 'unitmeasure_name');
            $table->renameColumn('abbreviation', 'unitmeasure_abbreviation');
        });
    }
};
