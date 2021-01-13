import { Injectable } from '@angular/core';
import { SKILL_NAME } from '../../share/enums/skill-name-enum';
import { SKILL_LIST } from '../../share/data/skills';
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

  next(newList: Skill[]): void {
    this.skillListSource.next(newList);
  }
}
