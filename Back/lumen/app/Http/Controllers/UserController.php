<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Utils\UserSession;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class UserController extends Controller {

  public function signUp(Request $request) {

    // initialization of an empty array to get all errors and display it if it's not empty
    $errors = [];

    // receiving requesting datas
    $nickname = $request->nickname;
    $email = $request->email;
    $password = $request->password;

    // If the nickname is empty sending an error message to frontend
    if(empty($nickname) && empty($email) && empty($password)) {
       array_push($errors, 'Les champs ne doivent pas être vides !');
    }

    if(empty($nickname)) {
        array_push($errors, 'Le pseudo ne doit pas être vide !');
    }

    if (strlen($nickname) < 5) {
      array_push($errors, "Le pseudo doit contenir au minimum 5 caractères !");
      var_dump($errors);
   }

    if (empty($email)) {
       array_push($errors, "L'email ne peut pas être vide !");
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      array_push($errors, "L'email n'est pas valide !");
    }

    if(empty($password)) {
      array_push($errors, "Le mot-de-passe ne doit pas être vide");
    }

    if (strlen($password) < 5) {
      array_push($errors, "Le mot-de-passe doit contenir au minimum 5 caractères");
    }

    if (empty($errors)) {
      $hashedPassword = (new BcryptHasher)->make($password);

      $user = new User();

      // now we can check if the email already exists in our database
      $existEmail = User::where('email', '=', $email)->first();  
      if ($existEmail !== NULL) {
        return response()->json(['error' => "L'email existe déjà !"], 400);
      }

      // if all is good then we can insert the user in our database
      $user->nickname = $nickname;
      $user->email = $email;
      $user->password = $hashedPassword;

      $user->save();

      return response()->json(['success' => 'Bravo vous faites maintenant parti de l\'équipe !'], 200);

    } else {
      return response()->json(['error' => $errors], 400);
    }

  }

}