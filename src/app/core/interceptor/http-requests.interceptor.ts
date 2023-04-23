import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq: HttpRequest<any> = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
    return next.handle(cloneReq);
  }
}
