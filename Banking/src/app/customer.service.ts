import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080';
 

  c: Customer = new Customer();


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
  createaccountlist(customerId: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/customer/' + `${customerId}` + '/account', customerId);
  }


  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/staff/customers');

  }

  putuserlist(user: Customer): Observable<object> {
    console.log("success");
    this.c = new Customer();
    return this.http.put(`${this.baseUrl}` + '/api/customer/' + `${user.customerId}`, user);
  }

  changeStatus(id:any): Observable<object> {
    return this.http.put(`${this.baseUrl}` + '/api/staff/customer', id);
  }

  setter(user: Customer){
      this.c = user;
  }

  getter(){
      return this.c;

  }
}
