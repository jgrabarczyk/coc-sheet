import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Skill, SkillDTO } from '../classes/skill';
import { SKILL_NAME } from '../enums/skill-name-enum';
import { SkillRestService } from './rest/skill-rest.service';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  private skillListSource = new BehaviorSubject<Skill[]>([]);
  public skillList$ = this.skillListSource.asObservable();

  constructor(
    private skillRestService_: SkillRestService
  ) { }

  public current(): Skill[] {
    return this.skillListSource.getValue();
  }

  public fetchSkills(): void {
    this.skillRestService_.getAll()
      .pipe(map(
        (response: SkillDTO[]) => response.map(
          (el: SkillDTO) => new Skill(el))
      ))
      .subscribe(
        (res: Skill[]) => this.next(res),
        (error) => console.error(`error: ${error}`)
      );
  }

  public get(name: SKILL_NAME): Skill {
    return this.current().filter(el => el.name === name)[0];
  }

  public getVal(name: SKILL_NAME): number {
    // return this.get(name).value;
    return 2;
  }

  public next(newList: Skill[]): void {
    this.skillListSource.next(newList);
  }

  public getDefaultValues(): void {
    this.fetchSkills();
  }

  public reset(): void {
    this.current().forEach(skill => skill.reset());
    this.next(this.current());
  }

  public save(): void {
    this.current().forEach(skill => skill.save());
    this.next(this.current());
  }

  public disableAll(): void {
    this.current().forEach(skill => skill.disabled = true);
  }

  public enableAll(): void {
    this.current().forEach(skill => skill.disabled = false);
  }
}
