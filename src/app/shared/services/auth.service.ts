import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { UserCredentials } from '@shared/interfaces/user-credentials.interface';
import { environment } from '@environments/environment';
import { UserInfo } from '@shared/interfaces/user-info.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: UserInfo;

  constructor(
    private http: HttpService
  ) { }

  private mapUserInfo(user: any): UserInfo {
    this.user = {
      avatar: user?.logo?.url?.high?.url,
      name: user?.firstname,
      email: user?.email
    };

    localStorage.setItem('token', user?.access_token);

    return this.user;
  }

  public signIn(userCredentials: UserCredentials): Observable<UserInfo> {
    return this.http.post(`${environment.auth}/signin`, userCredentials)
      .pipe(
        map((user: any) => this.mapUserInfo(user))
      );
  }
}
