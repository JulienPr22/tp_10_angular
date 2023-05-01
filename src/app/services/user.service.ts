import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import UserDTO from '../shared/models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.apiUrl);
  }
}
