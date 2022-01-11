import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public httpOptions: any;

  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'        
      })
    }
  }

  //login method: provides credentials & fetches Auth Token
  public login(){
    let user = {
      "username":"testuser",
      "password":"P@55w0rd1"
    };

    this.http.post('http://127.0.0.1:8000/get-token/', 
    JSON.stringify(user),this.httpOptions
    ).subscribe((data:any)=>{
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${data['token']}`
        })
      }
    });

  }

}
