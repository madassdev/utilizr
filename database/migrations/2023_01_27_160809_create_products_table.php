<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_id');
            $table->string('category');
            $table->string('name');
            $table->string('shortname');
            $table->text('description')->nullable();
            $table->string('pricing')->default('fixed');
            $table->integer('min_price')->default(0);
            $table->integer('max_price')->default(0);
            $table->integer('price')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
