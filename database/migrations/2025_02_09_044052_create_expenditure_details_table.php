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
        Schema::create('expenditure_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('expenditure_id');
            $table->foreignId('product_id');
            $table->foreignId('expenditure_type_id');
            $table->integer('quantity');

            $table->foreign('expenditure_id')->references('id')->on('expenditures');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('expenditure_type_id')->references('id')->on('expenditure_types');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('expenditure_details');
    }
};
