import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/staff/test');  //will change

  }

  createTransaction(user:object){
    console.log(user)
    return this.http.put(`${this.baseUrl}` + '/api/staff/transfer',user); 




  }
}