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
         DB::table('category')->insert([
            ['name' => 'Chicken'],
            ['name' => 'Noodles'],
            ['name' => 'Rice'],
            ['name' => 'Vegetables'],
            ['name' => 'Red meat'],
            ['name' => 'Snacks'],
            ['name' => 'Meals'],
            ['name' => 'Beverages'],
            ['name' => 'Spicy'],
            ['name' => 'Sweet'],
            ['name' => 'Cold'],
            ['name' => 'Big Portions'],
            ['name' => 'Catering'],
            
        ]);
    }
}