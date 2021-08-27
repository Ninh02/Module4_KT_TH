import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(environment.url_api);
  }

  getBookById(id:any):Observable<any>{
    return this.http.get(environment.url_api +'/'+ id);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(environment.url_api +'/'+ id);
  }

  addBook(data:any):Observable<any>{
    return this.http.post(environment.url_api,data);
  }


  editBook(id:number,data:any){
    return this.http.put(environment.url_api +'/'+id,data);
  }


}
