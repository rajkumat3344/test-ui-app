import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { DestinationComponent } from './destination/destination.component';
import { TripComponent } from './trip/trip.component';
import { TripCardComponent } from './trip/trip-card/trip-card.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SignupComponent,
    DestinationComponent,
    TripComponent,
    TripCardComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
