import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PROFESSION_LIST } from '../data/professions';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Profession } from '../classes/profession';

@Injectable({
  providedIn: 'root'
})

export class ProfessionService {
  private professionList_: Profession[] = PROFESSION_LIST;
  private professionListSource = new BehaviorSubject<Profession[]>(this.professionList_);
  public professionList$ = this.professionListSource.asObservable();

  constructor() { }

  public get(name: ATTRIBUTE_NAME): Profession {
    return this.professionList_.filter(el => el.name === name)[0];
  }

  next(newList: Profession[]): void {
    this.professionListSource.next(newList);
  }

  update(): void {
    this.professionList_.forEach(el => el.calcPoints());
    this.next(this.professionList_);
  }

}
