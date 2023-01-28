<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Provider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $providers = collect([
            [
                "name" => "MTN",
                "logo" => asset("images/providers/mtn_logo.png"),
                "shortname" => "mtn",
                "is_active" => true,
            ],
            [
                "name" => "Glo",
                "logo" => asset("images/providers/glo_logo.png"),
                "shortname" => "glo",
                "is_active" => true,
            ],
            [
                "name" => "9Mobile",
                "logo" => asset("images/providers/9mobile_logo.png"),
                "shortname" => "9mobile",
                "is_active" => true,
            ],
            [
                "name" => "Airtel",
                "logo" => asset("images/providers/airtel_logo.png"),
                "shortname" => "airtel",
                "is_active" => true,
            ],
            [
                "name" => "GOTV",
                "logo" => asset("images/providers/gotv_logo.png"),
                "shortname" => "gotv",
                "is_active" => true,
            ],
            [
                "name" => "DSTV",
                "logo" => asset("images/providers/dstv_logo.png"),
                "shortname" => "dstv",
                "is_active" => true,
            ],
            [
                "name" => "Startimes",
                "logo" => asset("images/providers/startimes_logo.png"),
                "shortname" => "startimes",
                "is_active" => true,
            ],
            [
                "name" => "EKEDC",
                "logo" => asset("images/providers/ekedc_logo.png"),
                "shortname" => "ekedc",
                "is_active" => true,
            ],
            [
                "name" => "IBEDC",
                "logo" => asset("images/providers/ibedc_logo.png"),
                "shortname" => "ibedc",
                "is_active" => true,
            ],
            [
                "name" => "IKEDC",
                "logo" => asset("images/providers/ikedc_logo.png"),
                "shortname" => "ikedc",
                "is_active" => true,
            ],
        ]);

        $providers = $providers->map(function ($provider) {
            return Provider::updateOrCreate(["shortname" => $provider["shortname"]], $provider);
        });

        dd($providers);

        $airtime_products =  collect([
            [
                "name" => "MTN Airtime",
                "shortname"  => "mtn-airtime",
                "category" => "airtime",
                "pricing"  => "range",
                "min_price" => 1,
                "max_price" => 10000,
                "price" => 0,
            ],
            [
                "name" => "Glo Airtime",
                "shortname"  => "glo-airtime",
                "category" => "airtime",
                "pricing"  => "range",
                "min_price" => 1,
                "max_price" => 10000,
                "price" => 0,
            ],
            [
                "name" => "9mobile Airtime",
                "shortname"  => "9mobile-airtime",
                "category" => "airtime",
                "pricing"  => "range",
                "min_price" => 1,
                "max_price" => 10000,
                "price" => 0,
            ],
            [
                "name" => "Airtel Airtime",
                "shortname"  => "airtel-airtime",
                "category" => "airtime",
                "pricing"  => "range",
                "min_price" => 1,
                "max_price" => 10000,
                "price" => 0,
            ],
        ]);


        $airtime_products->map(function ($product) {
            [$shortname, $service] = explode("-", $product['shortname']);
            $provider = Provider::whereShortname($shortname)->first();
            Product::updateOrCreate(["shortname" => $product["shortname"]], $product + ['provider_id' => $provider->id]);
        });

        $data_products = [
            [
                [
                    "name" => "1GB - 30 Days",
                    "shortname"  => "mtn-1gb-data",
                    "category" => "airtime",
                    "pricing"  => "fixed",
                    "min_price" => 0,
                    "max_price" => 0,
                    "price" => 300,
                ],
            ]
        ];
    }
}
