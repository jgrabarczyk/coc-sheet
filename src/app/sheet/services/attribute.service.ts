import { Injectable } from '@angular/core';
import { ATTRIBUTE_LIST } from '../data/attributes';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';
import { Attribute } from '../classes/attribute';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  private attributeList_: Attribute[] = ATTRIBUTE_LIST;
  private attributeListSource = new BehaviorSubject<Attribute[]>(this.attributeList_);
  public attributeList$ = this.attributeListSource.asObservable();

  constructor() { }

  public getVal(name: ATTRIBUTE_NAME): number {
    return this.attributeList_.filter(el => el.name === name).map(el => el.value)[0];
  }

  next(newList: Attribute[]): void {
    this.attributeListSource.next(newList);
  }
}
