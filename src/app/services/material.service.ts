import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<any> {
    const endpoint = `${this.baseUrl}/material`;
    return this.http.get<any>(endpoint);
  }
}
