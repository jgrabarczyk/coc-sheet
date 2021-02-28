import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillDTO } from '../../classes/skill';
import { Method, ServiceRestFactory } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class SkillRestService extends ServiceRestFactory<SkillDTO> {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<SkillDTO[]> {
    return this.request<SkillDTO[]>({
      url: '/skills',
      method: Method.GET,
      headers: { responseType: ' application/json' }
    });
  }
}
