<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Utils\UserSession;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\stdClass;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

class UserController extends Controller {

  public function signUp(Request $request) {

    // initialization of an empty array to get all errors and display it if it's not empty
    $errors = [];
    $key = 0;

    // receiving requesting datas
    $nickname = $request->nickname;
    $email = $request->email;
    $password = $request->password;

    // If the nickname is empty sending an error message to frontend
    if(empty($nickname) && empty($email) && empty($password)) {
       $object = new \stdClass();
       $object->key = $key++;
       $object->content = 'Les champs ne doivent pas être vides !';
       $errors[] = $object;
       return response()->json($errors, 400);
    }

    if(empty($nickname)) {
        $object = new \stdClass();
        $object->key = $key++;
        $object->content = 'Le pseudo ne doit pas être vide !';
        $errors[] = $object;
    }

    if (strlen($nickname) < 5) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "Le pseudo doit contenir au minimum 5 caractères !";
      $errors[] = $object;
   }

    if (empty($email)) {
       $object = new \stdClass();
       $object->key = $key++;
       $object->content = "L'email ne peut pas être vide !";
       $errors[] = $object;
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "L'email n'est pas valide !";
      $errors[] = $object;
    }

    if(empty($password)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "Le mot-de-passe ne doit pas être vide";
      $errors[] = $object;
    }

    if (strlen($password) < 5) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "Le mot-de-passe doit contenir au minimum 5 caractères";
      $errors[] = $object;
    }

    // now we can check if the email already exists in our database
    $existEmail = User::where('email', '=', $email)->first();  
    if ($existEmail !== NULL) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "L'email existe déjà !";
      $errors[] = $object;
    }

    if (empty($errors)) {
      $hashedPassword = (new BcryptHasher)->make($password);

      $user = new User();

      // if all is good then we can insert the user in our database
      $user->nickname = $nickname;
      $user->email = $email;
      $user->password = $hashedPassword;

      $user->save();

      return response()->json(['success' => 'Bravo vous faites maintenant parti de l\'équipe !'], 200);

    } else {
      return response()->json($errors, 400);
    }

  }

  public function signin (Request $request) {

    $errors = [];
    $key = 0;

    $email = $request->email;
    $password = $request->password;

    if(empty($email) && empty($password)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "Les champs ne doivent pas être vides !";
      $errors[] = $object;
      return response()->json($errors, 400);
    }

    if(empty($password)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "Le mot de passe ne doit pas être vide !";
      $errors[] = $object;
    }

    if (empty($email)) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "L'email ne peut pas être vide !";
      $errors[] = $object;
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      $object = new \stdClass();
      $object->key = $key++;
      $object->content = "L'email n'est pas valide !";
      $errors[] = $object;
    }

    if (empty($errors)) {
      $existEmail = User::where('email', '=', $email)->first();  
      if ($existEmail === NULL) {
        $object = new \stdClass();
        $object->key = $key++;
        $object->content = "L'email ou le mot de passe est inexact !";
        $errors[] = $object;
        return response()->json($errors, 400);
      }
      $user = User::all()->where('email', '=', $email)->first();
      $userPassword = $user->password;
  
      $comparePassword = (new BcryptHasher)->check($password, $userPassword);
  
      if($comparePassword === false) {
        $object = new \stdClass();
        $object->key = $key++;
        $object->content = "L'email ou le mot de passe est inexact !";
        $errors[] = $object;
        return response()->json($errors, 400);
      } else {
        // If the password is true then we can generate our token
        $id = $user->id;
        var_dump($id);
        $payload = [
          'iss' => "lumen-jwt",                     // Issuer of the token
          'sub' => $id,                      // Subject of the token
          'iat' => time(),                        // Time when JWT was issued. 
          'exp' => time() +  config('jwt.app.ttl')// Expiration time
      ];
      $jwt = JWT::encode($payload, config('jwt.app.secret'));
      return response()->json([ 'token' => $jwt, 'id' => $id ], 200);
      }
    } else {
      return response()->json($errors, 400);
    }

  }

}