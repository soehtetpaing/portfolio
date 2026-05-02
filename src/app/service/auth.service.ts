import { inject, Injectable } from '@angular/core';
import { HttpService } from '../utils/http.service';
import { app } from '../config/app.config';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpService);
  private baseUrl = app.notiUrl;

  getJwtTokens() {
    const path = "/auth/jwt/token";
    const url = this.baseUrl + path;
    const body = {
      id: "245213284410724352",
      username: "genius.iq",
      role: "admin",
      tokenVersion: 1
    }

    return this.http.post(url, body).pipe(
      tap((res: any) => {
        if (res.status == 200 && res.data?.tokens?.accessToken) {
          this.http.setAuthToken(res.data.tokens.accessToken);
        }
      })
    );
  }
}
