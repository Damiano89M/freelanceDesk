<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    private function owns(User $user, Project $project): bool
    {
        return $project->client()->where('user_id', $user->id)->exist();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Project $project): bool
    {
        return $this->owns($user, $project);
    }

    /**
     * Determine whether the user can update models.
     */
    public function update(User $user, Project $project): bool
    {
        return $this->owns($user, $project);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Project $project): bool
    {
        return $this->owns($user, $project);
    }

}
