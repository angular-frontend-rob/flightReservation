import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  criteria:Criteria = new Criteria('','','');

  constructor(private loginService:LoginService, 
    private reservationService:ReservationService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginService.login();
  }

  public onSubmit(){
    //console.log('>>>> in onSubmit() method...');
    //console.log('>>>> ' + this.criteria.departureCity);
    this.reservationService.getFlights(this.criteria).subscribe(
      (res: any)=>{
        console.log(res);
        //save retrieved flights on a flightData variable on...
        //...the reservationService since it will need the data
        this.reservationService.flightData = res;
        //navigate to the next component/route responsible for...
        //...displaying the fetched flights
        this.router.navigate(['displayFlights']);
      }
    )
  }

}
