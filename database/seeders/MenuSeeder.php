<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Contoh data menu untuk vendor dengan role 'vendor'
        $menus = [
            [
                'vendor_id' => 3,
                'name' => 'Nasi Goreng Spesial',
                'description' => 'Nasi goreng dengan telur, ayam, sayuran, dan bumbu spesial.',
                'price' => 25000,
                'amount' => 50,
                'image' => 'nasi_goreng.jpg',
            ],
            [
                'vendor_id' => 4,
                'name' => 'Sate Ayam Madura',
                'description' => 'Sate ayam dengan bumbu kacang khas Madura.',
                'price' => 30000,
                'amount' => 30,
                'image' => 'sate_ayam.jpg',
            ],
            [
                'vendor_id' => 3,
                'name' => 'Bakso Special',
                'description' => 'Bakso dengan kuah yang gurih dan daging yang lembut.',
                'price' => 20000,
                'amount' => 40,
                'image' => 'bakso.jpg',
            ],
            [
                'vendor_id' => 4,
                'name' => 'Ayam Penyet',
                'description' => 'Ayam goreng dengan sambal penyet yang pedas.',
                'price' => 28000,
                'amount' => 25,
                'image' => 'ayam_penyet.jpg',
            ],
            [
                'vendor_id' => 3,
                'name' => 'Mie Goreng Jawa',
                'description' => 'Mie goreng dengan bumbu khas Jawa.',
                'price' => 22000,
                'amount' => 35,
                'image' => 'mie_goreng.jpg',
            ],
            [
                'vendor_id' => 4,
                'name' => 'Es Teh Manis',
                'description' => 'Minuman es teh manis segar.',
                'price' => 5000,
                'amount' => 60,
                'image' => 'es_teh.jpg',
            ],
        ];
            
        // Insert data ke tabel 'menus'
        DB::table('menu')->insert($menus);
    }
}