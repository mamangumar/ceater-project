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
        Schema::create('order', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('costumer_id');
            $table->unsignedBigInteger('vendor_id');
            $table->string('name_costumer');
            $table->string('name_vendor');
            $table->decimal('price_buy', 10, 2);
            $table->enum('status',['order', 'processing', 'delivery', 'finished']);
            $table->timestamp('order_date');
            $table->enum('payment_method', ['Bank', 'Ovo', 'Shopeepay', 'Gopay', 'Dana', 'LinkAja']);
            
            $table->timestamps();

            $table->foreign('costumer_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('vendor_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};