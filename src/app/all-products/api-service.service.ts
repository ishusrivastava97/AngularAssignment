import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private https: HttpClient;
  constructor(private http: HttpClient) {
    this.https = http;
  }
  getdata(): Observable<any> {
    return this.https.get(this.apiUrl);
  }
  getProduct(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }
}
