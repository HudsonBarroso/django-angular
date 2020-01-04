import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 2fd23b457493840c0bdb37db8cef6f8231ac980f';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);
  

  constructor(private http: HttpClient) { }

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  }
