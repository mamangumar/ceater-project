<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
         $users = [
            [
                'name' => 'Admin User 1',
                'email' => 'admin1@example.com',
                'password' => bcrypt('password'),
                'role' => 'admin',
                'image' => 'user.jpg',
            ],
            [
                'name' => 'Admin User 2',
                'email' => 'admin2@example.com',
                'password' => bcrypt('password'),
                'role' => 'admin',
                'image' => 'user.jpg',
            ],
            [
                'name' => 'Vendor User 1',
                'email' => 'vendor1@example.com',
                'password' => bcrypt('password'),
                'role' => 'vendor',
                'image' => 'user.jpg',
            ],
            [
                'name' => 'Vendor User 2',
                'email' => 'vendor2@example.com',
                'password' => bcrypt('password'),
                'role' => 'vendor',
                'image' => 'user.jpg',
            ],
            [
                'name' => 'Customer User 1',
                'email' => 'customer1@example.com',
                'password' => bcrypt('password'),
                'role' => 'customer',
                'image' => 'user.jpg',
            ],
            [
                'name' => 'Customer User 2',
                'email' => 'customer2@example.com',
                'password' => bcrypt('password'),
                'role' => 'customer',
                'image' => 'user.jpg',
            ],
        ];

        foreach ($users as $userData) {
            $user = User::factory()->create([
                'name' => $userData['name'],
                'email' => $userData['email'],
                'password' => $userData['password'],
                'role' => $userData['role'],
                'image' => $userData['image']
            ]);
            
        }

        // Panggil CategorySeeder
        $this->call([
            CategorySeeder::class,
            MenuSeeder::class,
            MenuCategorySeeder::class,
            OrderSeeder::class,
            OrderItemSeeder::class,
        ]);
    }
}