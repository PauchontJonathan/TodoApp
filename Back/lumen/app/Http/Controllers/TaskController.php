<?php

namespace App\Http\Controllers;

use App\Models\ListModel;
use App\Models\TaskModel;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class TaskController extends Controller
{

  public function deleteTask($id) {

    $error = [];
    $key = 0;

    if (empty($id)) {
      $object = new \stdClass();
      $object->error = "L'id de la tâche est attendu";
      $object->key = $key++;
      $error[] = $object;
    }

    if (empty($error)) {

      $currentTask = TaskModel::find($id);

      $currentTask->delete();

      $success = [];
      $key = 0;
      
      $object = new \stdClass();
      $object->key = $key++;
      $object->success = "Votre tâche a bien été supprimé";
      $success[] = $object;

      return response()->json($success, 200);

    } else {
      return response()->json($error, 400);
    }

  }

  public function createTask (Request $request) {

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

      $newTask = new TaskModel();

      $newTask->list_id = $listId;
      $newTask->checked = 0;

      $newTask->save();

      $success = [];

      $object = new \stdClass();
      $object->success = "Votre tâche a bien été créée";
      $success[] = $object;
      
      return response()->json($success, 200);

    } else {
      return response()->json($error, 400);
    }

  }

  public function updateTask (Request $request) {

    $error = [];
    $key = 0;

    $taskId = $request->taskId;
    $content = $request->content;

    if (empty($taskId)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'id de la liste est attendu";
      $error[] = $object;
    }

    if (empty($error)) {

      $currentTask = TaskModel::find($taskId);

      $currentTask->content = $content;

      $currentTask->save();

      $success = [];

      $object = new \stdClass();
      $object->success = "Votre tâche a bien été modifié";
      $success[] = $object;

      return response()->json($success, 200);
      

    } else {
      return response()->json($error, 400);
    }

  }

  public function validateTask (Request $request) {

    $error = [];
    $key = 0;

    $newChecked = $request->isChecked;
    $taskId = $request->taskId;

    if (empty($taskId)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'id de la liste est attendu";
      $error[] = $object;
    }

    if (empty($newChecked)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->error = "L'état de coche de la tâche est attendu";
      $error[] = $object;
    }

    if ($newChecked === 'false') {
      $newChecked = false;
    } elseif ($newChecked === 'true') {
      $newChecked = true;
    }

    if (empty($error)) {

      $currentTask = TaskModel::find($taskId);

      if ($newChecked === false) {
        $currentTask->checked = false;
      } else if ($newChecked === true) {
        $currentTask->checked = 1;
      }
      
      $currentTask->save();

      $success = [];

      $object = new \stdClass();
      $object->success = "Votre tâche a bien été modifié";
      $success[] = $object;

      return response()->json($success, 200);


    } else {
      return response()->json($error, 400);
    }
  }
}
