import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMAGES_PATH } from '../core/constants';
import { IPaginator } from '../core/interfaces/IPaginator';
import { IPicture } from '../core/interfaces/IPicture';
import { IPictureList } from '../core/interfaces/IPictureList';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(paginator: IPaginator): Observable<IPictureList> {
    
    const params = new HttpParams()
      .set('page', paginator.pageIndex.toString());
    return this.http.get<IPictureList>(environment.apiUrl + IMAGES_PATH, { params });
  }

  getImageDetail(id: string): Observable<IPicture> {
    return this.http.get<IPicture>(`${environment.apiUrl + IMAGES_PATH}/${id}`);
  }
}
