<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('categories')->insert([
            ['name_category' => 'Chicken'],
            ['name_category' => 'Noodles'],
            ['name_category' => 'Rice'],
            ['name_category' => 'Vegetables'],
            ['name_category' => 'Red meat'],
            ['name_category' => 'Snacks'],
            ['name_category' => 'Meals'],
            ['name_category' => 'Beverages'],
            ['name_category' => 'Spicy'],
            ['name_category' => 'Sweet'],
            ['name_category' => 'Cold'],
            
        ]);
    }
}