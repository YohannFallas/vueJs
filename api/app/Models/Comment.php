<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\SoftDeletes;

  class Comment extends Model
  {
    use SoftDeletes;

    protected $dates = [ 'deleted_at' ];
    protected $with  = [ 'user' ];

    public function user()
    {
      return $this->belongsTo( User::class );
    }

    public function recipe()
    {
      return $this->belongsTo( Recipe::class );
    }

  }