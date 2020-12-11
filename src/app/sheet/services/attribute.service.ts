import { Injectable } from '@angular/core';
import { Attribute } from '../interfaces/attribute';
import { ATTRIBUTE_LIST } from '../data/attributes';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  private basicList_!: Attribute[];
  constructor() {
    this.basicList_ = ATTRIBUTE_LIST;
  }

  getAttribute(name: string): Attribute {
    return this.basicList_.filter(el => el.name === name)[0];
  }
}
