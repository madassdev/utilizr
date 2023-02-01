<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index()
    {
        return inertia('Dashboard/Index');
    }

    Public function airtime()
    {
        $airtime_products = Product::whereCategory('airtime')->with('provider')->get();
        return inertia('Dashboard/Buy/Airtime', compact('airtime_products'));
        return $airtime_products;
    }
}
