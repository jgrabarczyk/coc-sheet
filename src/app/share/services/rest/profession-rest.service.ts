import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProfessionDTO } from '../../classes/profession';
import { Method, ServiceRestFactory } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionRestService extends ServiceRestFactory<ProfessionDTO> {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<ProfessionDTO[]> {
    return this.request<ProfessionDTO[]>({
      url: '/professions',
      method: Method.GET,
      headers: { responseType: ' application/json' }
    });
  }
}
