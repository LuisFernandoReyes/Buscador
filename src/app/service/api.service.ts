import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi= '/assets/info/api.json';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
