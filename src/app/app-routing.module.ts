import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { OldauthGuard } from './oldauth.guard';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
     {path:'',component:LoginComponent},
     {path:'login',component:LoginComponent},
     {path:'team',component:TeamComponent},
     { path: 'teamDetail/:id', component: TeamDetailComponent },
     { path: 'playerDetail/:teamId/:playerId', component: PlayerDetailComponent },
     {path:'registration',component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
