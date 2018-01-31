import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { UsersComponent } from './users/users.component';
import { PlacesComponent } from './places/places.component';
import { AuthGuard } from './users/auth-guard.service';
import { CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';


const appRouters: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, // full path  be empty
    {path: 'home',
     component: HomeComponent,
     children: [
        {path: 'login', component: LoginComponent}
     ]
    },
    {path: 'complaints', canActivate: [AuthGuard], component: ComplaintsComponent},
    {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
    {path: 'places', canActivate: [AuthGuard], component: PlacesComponent}

];
@NgModule({
    imports: [
      RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
