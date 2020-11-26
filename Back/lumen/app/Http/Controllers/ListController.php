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

  public function deleteList(Request $request) {

    $error = [];
    $key = 0;

    $listId = $request->listId;

    if (empty($listId)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'id de la liste est attendu";
      $error[] = $object;
    }

    if (empty($error)) {

      $currentList = ListModel::find($listId);

      $currentList->delete();

      $success = [];

      $object = new\stdClass();
      $object->success = "Votre liste a bien été supprimé";
      $success[] = $object;

      return response()->json($success, 200);


    } else {
      return response()->json($error, 400);
    }

  }

  public function updateList(Request $request) {
 
    $error = [];
    $key = 0;

    $listId = $request->listId;
    $newName = $request->name;

    if (empty($listId)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'id de la liste est attendu";
      $error[] = $object;
    }

    if (empty($error)) {
      
      $currentList = ListModel::find($listId);

      $currentList->name = $newName;

      $currentList->save();

      $success = [];
      $object = new \stdClass();
      $object->success = 'Le nom de la liste a bien été mis à jour';
      $success[] = $object;

      return response()->json($success, 200);

    } else {
      return response()->json($error, 400);
    }

  }

}
