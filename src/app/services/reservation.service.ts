import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightsUrl:string = "http://127.0.0.1:8000/flightApi/findFlights/";
  singleFlightUrl:string = "http://127.0.0.1:8000/flightApi/flights/";
  saveReservationUrl:string = "http://127.0.0.1:8000/flightApi/createReservation/";

  flightData:any;

  constructor(private http:HttpClient, 
    private loginService:LoginService) { 

  }

  //get list of flights based on fromCity, toCity & date
  public getFlights(criteria:any):any{
    return this.http.post(this.flightsUrl, criteria, this.loginService.httpOptions);
  }

  //get flight details of selected flight to be reserved/booked
  public getFlight(id:number):any{
    return this.http.get(this.singleFlightUrl+id, this.loginService.httpOptions);
  }

  //save reservation details (selected flight + captured passenger info)
  public saveReservation(reservation:any):any{
    return this.http.post(this.saveReservationUrl, reservation, this.loginService.httpOptions);
  }



}
