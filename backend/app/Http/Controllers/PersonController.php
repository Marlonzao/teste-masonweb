<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    /**
     * Get a person by it's id.
     *
     * @param  string  $id
     * @param  Request  $request
     * @return Response
    */
    public function getByID($id, Request $request)
    {
        return response()->json(Person::where('id', $id)->get()->toArray()[0], 200);
    }

    /**
     * Get N last persons.
     *
     * @param  integer  $enviromentID
     * @param  integer  $quantity
     * @param  Request  $request
     * @return Response
    */
    public function getMany($quantity, Request $request)
    {
        $persons = Person::orderBy('id', 'desc')
        ->take($quantity)
        ->get()
        ->toArray();

        return response()->json($persons, 200);
    }

    /**
     * Compare each column from each record in the persons table against the search term provided by the user.
     *
     * @param  integer  $enviromentID
     * @param  string  $searchTerm
     * @param  Request  $request
     * @return Response
    */
    public function search($searchTerm, Request $request)
    {
        $searchTerm = urldecode(trim($searchTerm));

        $persons = Person::orderBy('id', 'desc')
        ->get()
        ->toArray();

        $found = [];

        foreach($persons as $person){
            foreach($person as $value){
                if(!is_array($value)){
                    similar_text($value,urldecode($searchTerm),$percent);
                    if($percent>60){
                        $found[] = $person;
                    }
                }else{
                    foreach($value as $person){
                        similar_text($person,urldecode($searchTerm),$percent);
                        if($percent>80){
                            $found[] = $person;
                        }
                    }
                }
            }
        }

        if(sizeof($found)>0)
            return response()->json($found, 200);
        else
            return response()->json([], 404);

        // if(Person::orderBy('id', 'desc')->where('name', 'LIKE', $searchTerm .'%')->exists()){
        //     $persons = Person::orderBy('id', 'desc')
        //     ->where('name', 'LIKE', $searchTerm .'%')
        //     ->get()
        //     ->toArray();

        //     return response()->json($persons, 200);            
        // }else{

        // }

    }

    /**
     * Add person
     *
     * @param  Request  $request
     * @return Response
    */
    public function addPerson(Request $request)
    {
        $person = $request->input();

        $person = Person::create([
            'first_name'    => $person['first_name'],
            'last_name'     => $person['last_name'],
            'email'         => $person['email'],
            'sex'           => $person['sex']
        ]);
        
        return response()->json($person->id, 200);
    }

    /**
     * Upload file
     *
     * @param  int      $id
     * @param  Request  $request
     * @return Response
    */
    public function uploadPhoto($id, Request $request)
    {
        if(@is_array(getimagesize($_FILES['file']['tmp_name'])) && move_uploaded_file($_FILES['file']['tmp_name'], __DIR__.'../../../../../uploads/'. $id .'.jpg')) {
            return response()->json([], 200);
        } else {
            return response()->json([], 500);
        }
    }

    /**
     * Edit the person
     *
     * @param  int  $id
     * @param  Request  $request
     * @return Response
    */
    public function editPerson($id, Request $request)
    {
        $person = $request->input();

        Person::where('id', $id)->update([
            'first_name'    => $person['first_name'],
            'last_name'     => $person['last_name'],
            'email'         => $person['email'],
            'sex'           => $person['sex']
        ]);
    }

    /**
     * Delete one person
     *
     * @param  int  $id
     * @param  Request  $request
     * @return Response
    */
    public function deletePerson($id, Request $request)
    {
        Person::where('id', $id)->delete();
    }
}
