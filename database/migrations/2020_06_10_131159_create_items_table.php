<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id(); 
            $table->text('name');
            $table->longtext('description');
            $table->string('image');
            $table->string('category_id');
            $table->float('price', 5, 2);
            $table->integer('discount')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('times_sold')->nullable();
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
        Schema::dropIfExists('items');
    }
}
