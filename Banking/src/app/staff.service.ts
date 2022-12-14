import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from './staff';


@Injectable({
  providedIn: 'root'
})
export class StaffService {


  s : Staff = new Staff();
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/admin/getstaff');  //will change

  }

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/admin/addstaff', user);
  }

  putuserList(id:any): Observable<object> {
    return this.http.put(`${this.baseUrl}` + '/api/admin/enablestaff', id);
  }

  getter() {
    return this.s;
  }

  setter(staff: Staff){
    this.s = staff;
  }

  //Sam's added funcntions

  
  
  
  deleteuserList(id: number): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}` + `/api/admin/enableemployee/`+ `${id}`, {responseType: 'text'});  //will change
  
  }

}
