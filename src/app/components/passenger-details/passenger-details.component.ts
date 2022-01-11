import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  
  public flightData:any;
  public reservation:Reservation = new Reservation('','','','','','','','','');

  constructor(private reservationService:ReservationService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationService.getFlight(Number.parseInt(this.route.snapshot.paramMap.get('id')!))
    .subscribe(((res: any)=>{
      this.flightData = res;
    }));
  }

  public onSubmit(){
    this.reservation.flightId = this.flightData.id;
    this.reservationService.saveReservation(this.reservation)
    .subscribe(((res: any)=>{
      //console.log('>>>>> Response: '+JSON.stringify(res));
      this.router.navigate(['/confirm', res.id]);
    }));
  }

}
