<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data penghubung antara menu dan category
        $menuCategories = [
            [
                'menu_id' => 1,
                'category_id' => 1,
            ],
            [
                'menu_id' => 1,
                'category_id' => 2,
            ],
            [
                'menu_id' => 2,
                'category_id' => 1,
            ],
            [
                'menu_id' => 3,
                'category_id' => 2,
            ],
            [
                'menu_id' => 2,
                'category_id' => 3,
            ],
            [
                'menu_id' => 3,
                'category_id' => 3,
            ],
            [
                'menu_id' => 4,
                'category_id' => 4,
            ],
            [
                'menu_id' => 4,
                'category_id' => 5,
            ],
            [
                'menu_id' => 5,
                'category_id' => 6,
            ],
            [
                'menu_id' => 5,
                'category_id' => 7,
            ],
            [
                'menu_id' => 6,
                'category_id' => 8,
            ],
            [
                'menu_id' => 6,
                'category_id' => 9,
            ],
            [
                'menu_id' => 6,
                'category_id' => 10,
            ],
            [
                'menu_id' => 6,
                'category_id' => 11,
            ],
            [
                'menu_id' => 6,
                'category_id' => 12,
            ],
            [
                'menu_id' => 6,
                'category_id' => 13,
            ],
            // Tambahkan data lainnya sesuai kebutuhan
        ];
         // Insert data ke tabel 'category_menu'
        DB::table('category_menu')->insert($menuCategories);

    }
}