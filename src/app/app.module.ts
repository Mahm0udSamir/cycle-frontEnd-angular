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
import { ComplaintsComponent } from './complaints/complaints.component';
import { UsersComponent } from './users/users.component';
import { PlacesComponent } from './places/places.component';
import { AuthGuard } from './users/auth-guard.service';
import { AuthService } from './users/auth.service';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './places/map/map.component';
import { LoginServerService } from './login/loginServer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ComplaintsComponent,
    UsersComponent,
    PlacesComponent,
    LoginComponent,
    MapComponent
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
  providers: [AuthGuard, AuthService, LoginServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
