import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


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
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJGKbI-G4vQHKsat8lGrpMs_BHbsOFuxQ'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [AuthGuard, AuthService, LoginServerService, BikeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
