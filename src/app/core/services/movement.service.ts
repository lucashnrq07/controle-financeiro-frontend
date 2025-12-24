import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movement } from '../models/movement.model';
import { environment } from '../api.config';

@Injectable({ providedIn: 'root' })
export class MovementService {

  private readonly API = `${environment.apiUrl}/movements`;

  constructor(private http: HttpClient) {}

  listByUser(userId: number) {
    return this.http.get<Movement[]>(`${this.API}/user/${userId}`);
  }

  create(payload: any) {
    return this.http.post(this.API, payload);
  }

  getBalance(userId: number) {
    return this.http.get<number>(`${this.API}/user/${userId}/balance`);
  }
}
