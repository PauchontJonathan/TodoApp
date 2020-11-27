<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ListModel extends Model {

    protected $table = 'list';

    public function tasks() {
        return $this->hasMany('App\Models\TaskModel', 'list_id');
    }
    
}