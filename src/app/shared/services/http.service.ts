import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Requisição post do HttpClient
   *
   * @param url endpoint da API
   * @param data objeto que vai ser enviado
   * @param SendType tipo do objeto a ser enviado, por exemplo Login
   * @param ReturnType tipo do objeto que vai retornar, por exemplo Usuario
   *
   */
  public post<SendyType, ReturnType>(url: string, data: SendyType): Observable<ReturnType> {
    return this.http.post<ReturnType>(url, data);
  }
}
