import { Injectable } from '@angular/core';
import { ATTRIBUTE_LIST } from '../../share/data/attributes';
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

  public get(name: ATTRIBUTE_NAME): Attribute {
    return this.attributeList_.filter(el => el.name === name)[0];
  }
  public getVal(name: ATTRIBUTE_NAME): number {
    return this.get(name).value;
  }

  next(newList: Attribute[]): void {
    this.attributeListSource.next(newList);
  }
}
