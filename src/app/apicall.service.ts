import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http :HttpClient) {
   }

   bookget(){
    return  this.http.get<any>('http://127.0.0.1:8000/books/')
   }

   bookeditget(id: any){
    return this.http.get<any>(`http://127.0.0.1:8000/book/${id}`)
   }

   bookedit(id : any ,data:any){
    return this.http.put<any>(`http://127.0.0.1:8000/book/${id}/`,data)
   }

   bookcreate(data:any){
    return this.http.post<any>('http://127.0.0.1:8000/books/',data)
   }

   bookdelete(id : any ){
    return this.http.delete<any>(`http://127.0.0.1:8000/book/${id}/`)
   }

   
}
