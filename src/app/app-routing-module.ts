import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplaintsComponent } from './admin/complaints/complaints.component';
import { UsersComponent } from './admin/users/users.component';
import { PlacesComponent } from './admin/places/places.component';
import { MaintenancesComponent } from './admin/maintenances/maintenances.component';
import { AuthGuard } from './login/auth-guard.service';
import { CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { UserComponent } from './user/user.component';
import { BikesComponent } from './admin/bikes/bikes.component';
import { NewBikeComponent } from './admin/bikes/new-bike/new-bike.component';
import { RemveBikeComponent } from './admin/bikes/remve-bike/remve-bike.component';
import { ReloadComponent } from './reload/reload.component';


const appRouters: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, // full path  be empty
    {path: 'home',
     component: HomeComponent,
     children: [
        {path: 'login', component: LoginComponent}
     ]
    },
    {path: 'admin', 
    component: AdminComponent,
    children: [
        {path: 'complaints', component: ComplaintsComponent},
        {path: 'users', component: UsersComponent},
        {path: 'places', component: PlacesComponent},
        {path: 'maintenances', component: MaintenancesComponent},
        {path: 'bikes',
         component: BikesComponent,
         children: [
             {path: 'new', component: NewBikeComponent},
             {path: 'remove', component: RemveBikeComponent}
            ]
        },
    ],
    //  canActivateChild: [AuthGuard]
    },
    {path: 'maintenace', component: MaintenanceComponent},
    {path: 'user', component: UserComponent},
    {path: 'reload/:fdir/:sdir', component: ReloadComponent},
    {path: '**', redirectTo: 'home' }


];
@NgModule({
    imports: [
  RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
