<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data contoh untuk order
        $orders = [
            [
                'costumer_id' => 5,
                'vendor_id' => 3,
                'name_costumer' => 'John Doe',
                'name_vendor' => 'Vendor User 1',
                'price_buy' => 150000,
                'status' => 'order',
                'order_date' => Carbon::now()->subDays(2),
                'payment_method' => 'Ovo',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'costumer_id' => 6,
                'vendor_id' => 3,
                'name_costumer' => 'Customer User 2',
                'name_vendor' => 'Vendor User 1',
                'price_buy' => 250000,
                'status' => 'processing',
                'order_date' => Carbon::now()->subDays(1),
                'payment_method' => 'Gopay',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'costumer_id' => 6,
                'vendor_id' => 4,
                'name_costumer' => 'Customer User 2',
                'name_vendor' => 'Vendor User 2',
                'price_buy' => 180000,
                'status' => 'delivery',
                'order_date' => Carbon::now(),
                'payment_method' => 'Bank',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // Tambahkan data lainnya sesuai kebutuhan
        ];

        // Insert data ke tabel 'orders'
        DB::table('order')->insert($orders);
    }
}