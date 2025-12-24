import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../api.config';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly API = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  create(payload: { name: string; email: string; password: string }) {
    return this.http.post(this.API, payload);
  }
}
