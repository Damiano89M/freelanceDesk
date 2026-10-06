<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[fillable(['name', 'company', 'email', 'phone', 'notes'])]
class Client extends ApiModel
{
    use HasFactory;

   /*  protected $fillable = [
        'name',
        'company',
        'email',
        'phone',
        'notes'
    ]; */

    public function user(): BelongsTo 
    {
        return $this->belongsTo(User::class);
    }

   /*  public function projects(): HasMany
    {
        return $this->hasMany(Projects::class);
    }

    public function quotes(): HasMany
    {
        return $this->hasMany(Quote::class);
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class);
    } */
}
