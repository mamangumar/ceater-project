<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function categoryMenu()
    {
        return $this->hasMany(OrderItem::class);
    }

    // public function costumer()
    // {
    //     return $this->belongsTo(User::class);
    // }
    use HasFactory;



    protected $table = 'order';
}
