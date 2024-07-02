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
        Schema::create('category_menu', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('menu_id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')
                ->on('category')->onDelete('cascade');
            $table->foreign('menu_id')->references('id')
                ->on('menu')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_menu');
    }
};