import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AttributeDTO } from '../../classes/attribute';
import { Method, RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AttributeRestService extends RestService {

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
