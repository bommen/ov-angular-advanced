import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface User {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login({ username, password }: AuthCredentials): Observable<User> {
    if (username === 'username' && password === 'password') {
      return of({
        username: 'username',
      }).pipe(delay(100));
    } else {
      return throwError(() => 'Invalid credentials');
    }
  }
}
