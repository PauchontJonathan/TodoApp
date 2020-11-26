<?php

namespace App\Http\Controllers;

use App\Models\ListModel;
use App\Models\Task;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ListController extends Controller
{

  public function getAllTasks($id) {

    $error = [];
    $key = 0;

    if (empty($îd)) {
      $object = new \stdClass();
      $object->error = "L'id de la liste est attendu";
      $object->key = $key++;
      $error[] = $object;
    }

    if (empty($error)) {

      $TasksByList = ListModel::find($id)->hasMany();


    } else {
      return response()->json($error, 400);
    }

  }


}
