// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from "rxjs";
// import { environment } from '../../environments/environment';
// import { Restresponse } from '../domain/RestResponse';

// @Injectable({
//   providedIn: 'root'
// })
// export class HotelService {

//   constructor( private http: HttpClient) { }

//   getHotelSearch(params:object): Observable<Restresponse> {
//     let fetchUrl = `${environment.baseUrl}hotels/`;  
//     return this.http.get(fetchUrl).map(res => {
//       return res.json();
//     });
//   }
// }