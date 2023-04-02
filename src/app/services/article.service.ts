import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http: HttpClient) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded;
  }

  addArticle(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/api/addArticle', data).pipe(
      tap(() => {
        this._refreshNeeded.next();
      }));
  }

  getArticle(): Observable<any> {
    return this._http.get('http://localhost:8080/api/getAllArticles');
  }

  generateIndividualBarCode(id: any): Observable<Blob> {
    return this._http.get<any>(`http://localhost:8080/api/generateBarcode/${id}`, {
      responseType: 'blob' as 'json',
    });
  }

  bulkBarCode(data: any): Observable<Blob> {
    return this._http.post<any>('http://localhost:8080/api/bulk', data, {
      responseType: 'blob' as 'json',
    });
  }

  addBulkArticle(data: any): Observable<any> {
    return this._http.post<Blob>('http://localhost:8080/api/upload', data, {
      responseType: 'blob' as 'json',
    }).pipe(
      tap(() => {
        this._refreshNeeded.next();
      }));
  }

  deleteArticle(id: any): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/deleteArticle/${id}`);
  }
}
