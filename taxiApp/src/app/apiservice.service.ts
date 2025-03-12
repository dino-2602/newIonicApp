import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private apiUrl = 'http://localhost:8102';

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    const userInfo = {
      username: user.email,
      password: user.password,
      firstName: user.first_name || '',
      lastName: user.last_name || '',
      phone: user.phone || '',
      type: 'client',
      stripeId: user.stripeId || null,
    };

    console.log("📡 Sending to API:", userInfo);

    return this.http.post(`${this.apiUrl}/login/register`, userInfo, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap(
        response => console.log("✅ API Response:", response),
        error => console.error("❌ API Error:", error)
      )
    );
  }

}
