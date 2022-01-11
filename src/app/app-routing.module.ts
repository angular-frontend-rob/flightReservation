import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';

const routes: Routes = [
  {
    path: 'findFlights',
    component: FindFlightsComponent
  },
  {
    path: 'displayFlights',
    component: DisplayFlightsComponent
  },
  {
    path: 'passengerDetails/:id',
    component: PassengerDetailsComponent
  },
  {
    path: 'confirm/:id',
    component: ConfirmComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
