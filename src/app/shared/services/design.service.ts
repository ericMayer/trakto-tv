import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '@shared/services/http.service';
import { environment } from '@environments/environment';
import { MaterialDidatico } from '@shared/interfaces/material-didatico.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpService) { }

  public mapDesigns(design: any): MaterialDidatico[] {
    const materialDidatico: MaterialDidatico[] = [];

    design?.data?.forEach((designData: any) => {
      materialDidatico.push({
        title: designData?.title,
        slides: designData?.pages?.length,
        thumbnail: designData?.thumbs?.high,
        update: designData?.updated_at,
        id: designData?.id
      });
    });

    return materialDidatico;
  }

  public getDesigns(useTotalPerPage: boolean = true): Observable<MaterialDidatico[]> {
    let params: HttpParams = new HttpParams()
      .set('order_by', 'title')
      .set('order_orientation', 'desc');

    if (useTotalPerPage)
      params = params.set('total_per_page', 10);

    return this.http.get(environment.design, {
      params
    })
      .pipe(
        map((design: any) => this.mapDesigns(design))
      );
  }
}
