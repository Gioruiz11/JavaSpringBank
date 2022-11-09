import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080';
  id: number | undefined;

  constructor(private http:HttpClient) { }


  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/staff/account/approval');  //will change

  }
  changeuserStatus(id:any): Observable<any>{
    console.log(id)
    return this.http.put(`${this.baseUrl}` + '/api/staff/account/change/status',id,{responseType: 'text'}); 




  }

  getAccountStatement(id:any): Observable<any>{
    this.id=id
    console.log(this.id)
    return this.http.get(`${this.baseUrl}` + '/api/staff/account/' + `${this.id}`)


  }

  getAccountInfo(id:any): Observable<any>{
    
    
    return this.http.get(`${this.baseUrl}` + `/api/staff/account/info/${id}`)


  }

 getAccountName(id:any): Observable<any>{
  return this.http.get(`${this.baseUrl}` + `api/staff/customer/search/${id}`)


}
}
