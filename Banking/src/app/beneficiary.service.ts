import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from './beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  deleteUser(id: any, custid: any) {
      return this.http.delete(`${this.baseUrl}` + '/api/customer/' + `${custid}` + '/beneficiary/' + `${id}`);
  }

  private baseUrl = 'http://localhost:8070';

  constructor(private http:HttpClient) { }

  createuserlist(user: Beneficiary, customerid: any) {
    return this.http.post(`${this.baseUrl}` + '/api/customer/' + `${customerid}` + "/beneficiary", user)
  }


  getuserList(): Observable<any> {
 
    return this.http.get(`${this.baseUrl}` + '/api/staff/beneficiary/approval');  //will change
    
  }
  changeuserStatus(id:any){
    console.log(id)
    return this.http.put(`${this.baseUrl}` + '/api/staff/beneficiary/change/status',id,{responseType: 'text'}); 
  }
}
