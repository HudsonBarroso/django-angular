import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://34.95.232.253:8000/';
  token = 'Token 278eb0284ee5532d457fc942deede6d6ef6ca721';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);
  

  constructor(private http: HttpClient) { }

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  }
