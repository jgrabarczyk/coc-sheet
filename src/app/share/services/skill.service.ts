import { Injectable } from '@angular/core';

import { Skill, SkillDTO } from '../classes/skill';
import { SKILL_NAME } from '../enums/skill-name-enum';
import { SkillRestService } from './rest/skill-rest.service';
import { ServiceFactory } from './service-factory';

@Injectable({
  providedIn: 'root'
})

export class SkillService extends ServiceFactory<SkillDTO, Skill>{
  constructor(
    private skillRestService_: SkillRestService
  ) {
    super(skillRestService_, Skill);
  }


  public get(name: SKILL_NAME): Skill {
    return this.currentStreamValue().filter(el => el.name === name)[0];
  }

  public getVal(name: SKILL_NAME): number {
    return this.get(name)?.value;
  }

  public getDefaultValues(): void {
    this.fetchCollection();
  }

  public reset(): void {
    this.currentStreamValue().forEach(skill => skill.reset());
    this.passNextValueToSubject(this.currentStreamValue());
  }

  public save(): void {
    this.currentStreamValue().forEach(skill => skill.save());
    this.passNextValueToSubject(this.currentStreamValue());
  }

  public disableAll(): void {
    this.currentStreamValue().forEach(skill => skill.disabled = true);
  }

  public enableAll(): void {
    this.currentStreamValue().forEach(skill => skill.disabled = false);
  }


  public updateWith(list: Skill[]): void {
    this.passNextValueToSubject(list);

  }
}
