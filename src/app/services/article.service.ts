import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http: HttpClient) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  addArticle(data: any) : Observable<any>{
    return this._http.post('http://localhost:8080/api/addArticle',data).pipe(
      tap(() => {
        this._refreshNeeded.next();
      }));
  }

  getArticle() : Observable<any>{
    return this._http.get('http://localhost:8080/api/getAllArticles');
  }

  uploadFile(data: any) : Observable<any>{
    return this._http.post('http://localhost:8080/api/upload',data).pipe(
      tap(() => {
        this._refreshNeeded.next();
      }));
  }

  deleteArticle(id:any): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/deleteArticle/${id}`);
  }
}
