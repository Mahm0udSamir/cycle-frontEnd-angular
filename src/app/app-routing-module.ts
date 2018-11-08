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
import { NewMaintenanceComponent } from './admin/maintenances/new-maintenance/new-maintenance.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HistoryComponent } from './user/history/history.component';
import { UpdateEmailComponent } from './user/update/update-email/update-email.component';
import { UpdateNameComponent } from './user/update/update-name/update-name.component';
import { UpdatePasswordComponent } from './user/update/update-password/update-password.component';
import { UpdateBalanceComponent } from './user/update/update-balance/update-balance.component';
import { UserFeedbackComponent } from './user/user-feedback/user-feedback.component';
import { MaintenanceFeedbackComponent } from './maintenance/maintenance-feedback/maintenance-feedback.component';
import { UsersComplaintsComponent } from './admin/complaints/users-complaints/users-complaints.component';


const appRouters: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // full path  be empty
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    },
    {
        path: 'admin', 
        // canActivate: [AuthGuard]
        canActivateChild: [AuthGuard],
        component: AdminComponent,
        children: [
            { path: 'complaints', component: ComplaintsComponent},
            { path: 'user-complaint', component: UsersComplaintsComponent },
            { path: 'users', component: UsersComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'places', component: PlacesComponent },
            {
                path: 'maintenances',
                component: MaintenancesComponent,
                children: [{ path: 'new', component: NewMaintenanceComponent }]
            },
            {
                path: 'bikes',
                component: BikesComponent,
                children: [
                    { path: 'new', component: NewBikeComponent },
                    { path: 'remove', component: RemveBikeComponent }
                ]
            }
        ]
    },
    {
        path: 'maintenace',
        component: MaintenanceComponent,
        children: [
            { path: 'map', component: PlacesComponent },
            { path: 'update-email', component: UpdateEmailComponent },
            { path: 'update-name', component: UpdateNameComponent },
            { path: 'update-password', component: UpdatePasswordComponent },
            { path: 'feedback', component: MaintenanceFeedbackComponent },
        ]
    },
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'feedback', component: UserFeedbackComponent },
            { path: 'update-email', component: UpdateEmailComponent },
            { path: 'update-name', component: UpdateNameComponent },
            { path: 'update-password', component: UpdatePasswordComponent },
            { path: 'update-balance', component: UpdateBalanceComponent }
        ]
    },
    // {path: 'reload', component: ReloadComponent},
    { path: 'reload/:fdir/:sdir', component: ReloadComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: 'not-found' }


];
@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
