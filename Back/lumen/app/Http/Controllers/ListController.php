<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ListModel;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ListController extends Controller
{
  public function getAllLists($id) {
    $lists = User::find($id)->lists()->get();
    $list = [];
    foreach ($lists as $key => $singleList) {
      $object = new \stdClass();
      $object->id = $singleList->id;
      $object->name = $singleList->name;
      $list[] = $object;
    }
    return response()->json($list, 200); 
  }

  public function createList(Request $request) {

    $error = [];
    $key = 0;

    $userId = $request->user_id;

    if (empty($userId)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'id de l'utilisateur est attendu";
      $error[] = $object;
    }

    if (empty($error)) {

      $list = new ListModel();

      $convertedUserId = intval($userId);
      $list->user_id = $convertedUserId;

      $list->save();

      return response()->json(["success" => "Liste créée"], 200);
    
    } else {
      return response()->json($error, 400);
    }
  }

}
