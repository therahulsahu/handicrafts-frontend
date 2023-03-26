import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http: HttpClient) { }

  addArticle(data: any) : Observable<any>{
    return this._http.post('http://localhost:3000/articles',data);
  }

  getArticle() : Observable<any>{
    return this._http.get('http://localhost:3000/articles');
  }
}
