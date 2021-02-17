import { Injectable } from '@angular/core';

import { Attribute, AttributeDTO } from '../classes/attribute';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { AttributeRestService } from './rest/attribute-rest.service';
import { ServiceFactory } from './service-factory';

@Injectable({
  providedIn: 'root'
})

export class AttributeService extends ServiceFactory<AttributeDTO, Attribute> {

  constructor(
    private attributeRestService_: AttributeRestService,
  ) {
    super(attributeRestService_, Attribute);
  }

  public get(name: ATTRIBUTE_NAME): Attribute {
    return this.currentStreamValue().filter(el => el.name === name)[0];
  }

  public getVal(name: ATTRIBUTE_NAME): number {
    return this.get(name)?.value ? this.get(name)?.value : 0;
  }

  public randomize(): void {
    this.passNextValueToSubject(
      this.currentStreamValue().map(attribute => ({
        ...attribute,
        value: attribute.diceRoll.roll() * 5
      })));
  }

}
