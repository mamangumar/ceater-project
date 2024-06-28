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
        Schema::create('menu', function (Blueprint $table) {
             $table->id();
            $table->unsignedBigInteger('vendor_id');
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });
         Schema::table('menu', function (Blueprint $table) {
            $table->foreign('vendor_id')->references('id')->on('users');
        });
        Schema::table('category', function (Blueprint $table) {
            $table->foreign('menu_id')->references('id')->on('menus');});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu');
    }
};