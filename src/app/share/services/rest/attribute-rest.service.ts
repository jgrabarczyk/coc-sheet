import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AttributeDTO } from '../../classes/attribute';
import { Method, ServiceRestFactory } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AttributeRestService extends ServiceRestFactory<AttributeDTO> {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<AttributeDTO[]> {
    return this.request<AttributeDTO[]>({
      url: '/attributes',
      method: Method.GET,
      headers: { responseType: ' application/json' }
    });
  }
}
