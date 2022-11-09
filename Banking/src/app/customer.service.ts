import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080';
 

  constructor(private http:HttpClient) { }

  //connect to the server and get the data from the server  object
  //CRUD service
  //connect point to the server and UI

  //we need to define method to post the data
  //Post the data to the server

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/customer/register', user);
  }

  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/customer/getcustomers');  //will change

  }
  changeStatus(id:any):Observable<any> {
     console.log(id)
    return this.http.put(`${this.baseUrl}` + '/api/staff/customer',id);  //will change

  }
 

}
