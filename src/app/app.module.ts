import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { Md2Module } from 'md2';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './header/header.component';
import { ComplaintsComponent } from './admin/complaints/complaints.component';
import { UsersComponent } from './admin/users/users.component';
import { PlacesComponent } from './admin/places/places.component';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './admin/places/map/map.component';
import { LoginServerService } from './login/loginServer.service';
import { MaintenancesComponent } from './admin/maintenances/maintenances.component';
import { UserComponent } from './user/user.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AdminComponent } from './admin/admin.component';
import { BikeService } from './shared/bike.service';
import { UserService } from './shared/user.service';
import { BikesComponent } from './admin/bikes/bikes.component';
import { NewBikeComponent } from './admin/bikes/new-bike/new-bike.component';
import { RemveBikeComponent } from './admin/bikes/remve-bike/remve-bike.component';
import { ReloadComponent } from './reload/reload.component';
import { NameFilterPipe } from './shared/name-filter.pipe';
import { MaintenancesService } from './admin/maintenances/maintenances.service';
import { NewMaintenanceComponent } from './admin/maintenances/new-maintenance/new-maintenance.component';
import { ToggleDirective } from './diractive/toggle.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ComplaintService } from './admin/complaints/complaints.service';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { FeedbackService } from './admin/feedback/feedback.service';
import { DropdownDirective } from './diractive/dropdown.directive';
import { ProfileComponent } from './user/profile/profile.component';
import { HistoryComponent } from './user/history/history.component';
import { UserProfileService } from './user/userProfile.service';
import { SettingMenueComponent } from './setting-menue/setting-menue.component';
import { UpdateEmailComponent } from './user/update/update-email/update-email.component';
import { UpdateNameComponent } from './user/update/update-name/update-name.component';
import { UpdatePasswordComponent } from './user/update/update-password/update-password.component';
import { UpdateBalanceComponent } from './user/update/update-balance/update-balance.component';
import { UserFeedbackComponent } from './user/user-feedback/user-feedback.component';
import { MaintenanceService } from './maintenance/maintenance.service';
import { MaintenanceFeedbackComponent } from './maintenance/maintenance-feedback/maintenance-feedback.component';
import { UsersComplaintsComponent } from './admin/complaints/users-complaints/users-complaints.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    ComplaintsComponent,
    UsersComponent,
    PlacesComponent,
    LoginComponent,
    MapComponent,
    MaintenancesComponent,
    UserComponent,
    MaintenanceComponent,
    BikesComponent,
    NewBikeComponent,
    RemveBikeComponent,
    ReloadComponent,
    NameFilterPipe,
    ToggleDirective,
    NewMaintenanceComponent,
    ErrorPageComponent,
    FeedbackComponent,
    DropdownDirective,
    ProfileComponent,
    HistoryComponent,
    SettingMenueComponent,
    UpdateEmailComponent,
    UpdateNameComponent,
    UpdatePasswordComponent,
    UpdateBalanceComponent,
    UserFeedbackComponent,
    MaintenanceFeedbackComponent,
    UsersComplaintsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    Md2Module,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJGKbI-G4vQHKsat8lGrpMs_BHbsOFuxQ'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoginServerService,
    BikeService,
    UserService,
    MaintenancesService,
    FeedbackService,
    ComplaintService,
    UserProfileService,
    MaintenanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
