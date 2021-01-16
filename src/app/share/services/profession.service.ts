import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PROFFESION_LIST } from '../data/professions';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Proffesion } from '../classes/proffesion';

@Injectable({
  providedIn: 'root'
})

export class ProfessionService {
  private professionList_: Proffesion[] = PROFFESION_LIST;
  private proffesionListSource = new BehaviorSubject<Proffesion[]>(this.professionList_);
  public proffesionList$ = this.proffesionListSource.asObservable();

  constructor() { }

  public get(name: ATTRIBUTE_NAME): Proffesion {
    return this.professionList_.filter(el => el.name === name)[0];
  }

  next(newList: Proffesion[]): void {
    this.proffesionListSource.next(newList);
  }

  update(): void {
    this.professionList_.forEach(el => el.calcPoints());
    this.next(this.professionList_);
  }

}
