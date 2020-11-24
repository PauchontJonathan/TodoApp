<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model {

    protected $table = 'user';

    protected $fillable = [
        'nickname', 'email',
    ];
    protected $hidden = [
        'password',
    ];

    public function lists()
    {
        return $this->hasMany('App\Models\ListModel', 'user_id');
    }
}