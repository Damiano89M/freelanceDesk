<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function index(): JsonResponse 
    {
        return response()-> json(
            []
        );
    }
}
    