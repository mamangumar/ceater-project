<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data contoh untuk order item
        $orderItems = [
            [
                'order_id' => 1,
                'menu_id' => 1,
                'amount' => 2,
                'is_done' => 'yes',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'order_id' => 1,
                'menu_id' => 3,
                'amount' => 1,
                'is_done' => 'no',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'order_id' => 3,
                'menu_id' => 2,
                'amount' => 3,
                'is_done' => 'yes',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan data lainnya sesuai kebutuhan
        ];

        // Insert data ke tabel 'order_item'
        DB::table('order_item')->insert($orderItems);
    }
}