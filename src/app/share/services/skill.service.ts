import { Injectable } from '@angular/core';
import { SKILL_NAME } from '../enums/skill-name-enum';
import { SKILL_LIST } from '../data/skills';
import { Skill } from '../classes/skill';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  private skillList_: Skill[] = SKILL_LIST;
  private skillListSource = new BehaviorSubject<Skill[]>(this.skillList_);
  public skillList$ = this.skillListSource.asObservable();

  constructor() { }

  public get(name: SKILL_NAME): Skill {
    return this.skillList_.filter(el => el.name === name)[0];
  }

  public getVal(name: SKILL_NAME): number {
    return this.get(name).value;
  }

  public next(newList: Skill[]): void {
    this.skillListSource.next(newList);
  }

  public reset(): void {
    this.skillList_.forEach(skill => skill.reset());
    this.next(this.skillList_);
  }

  public save(): void {
    this.skillList_.forEach(skill => skill.save());
    this.next(this.skillList_);
  }
}
