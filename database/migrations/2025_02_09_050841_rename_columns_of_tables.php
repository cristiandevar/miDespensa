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
        Schema::table('categories' , function (Blueprint $table) {
            $table->renameColumn('category_name', 'name');
            $table->renameColumn('category_active', 'active');
        });

        Schema::table('purchases', function (Blueprint $table) {
            $table->renameColumn('purchase_date', 'date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories' , function (Blueprint $table) {
            $table->renameColumn('name', 'category_name');
            $table->renameColumn('active', 'category_active');
        });

        Schema::table('purchases', function (Blueprint $table) {
            $table->renameColumn('date', 'purchase_date');
        });
    }
};
