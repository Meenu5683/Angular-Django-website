import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResgistrationService {

  constructor(private http :HttpClient) { }

  register(data : any){
    return this.http.post<any>('http://127.0.0.1:8000/register/' , data)
  }
}
