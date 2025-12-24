import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { environment } from '../api.config';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private readonly API = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  listByUser(userId: number) {
    return this.http.get<Category[]>(`${this.API}/user/${userId}`);
  }

  create(userId: number, payload: { name: string; type: string }) {
    return this.http.post<Category>(`${this.API}/user/${userId}`, payload);
  }
}
