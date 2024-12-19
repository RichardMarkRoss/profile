import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments, Rates } from '../classes/comment';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://hexarate.paikama.co/api/rates/latest/';

  constructor(private http: HttpClient) {}

  getRates(base: string, target: string): Observable<any> {
    return this.http.get<any>(`${this.url}${base}?target=${target}`);
  }
}
