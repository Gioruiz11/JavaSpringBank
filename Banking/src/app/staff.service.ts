import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/admin/staff');  //will change

  }

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/admin/staff', user);
  }
}
