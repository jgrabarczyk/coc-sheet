import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Attribute, AttributeDTO } from '../classes/attribute';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { AttributeRestService } from './rest/attribute-rest.service';

@Injectable({
  providedIn: 'root'
})

export class AttributeService {
  private attributeListSource = new BehaviorSubject<Attribute[]>([]);
  public attributeList$ = this.attributeListSource.asObservable();

  constructor(
    private attributeRestService_: AttributeRestService
  ) { }

  public fetchAttributes(): void {
    this.attributeRestService_.getAll()
      .pipe(map(
        (response: AttributeDTO[]) =>
          response.map((el: AttributeDTO) => new Attribute(el))
      ))
      .subscribe(
        (res: Attribute[]) => this.next(res),
        (error) => console.error(`error: ${error}`)
      );
  }

  public current(): Attribute[] {
    return this.attributeListSource.getValue();
  }

  public get(name: ATTRIBUTE_NAME): Attribute {
    return this.current().filter(el => el.name === name)[0];
  }

  public getVal(name: ATTRIBUTE_NAME): number {
    return this.get(name)?.value ? this.get(name).value : 0;
  }

  public next(newList: Attribute[]): void {
    this.attributeListSource.next(newList);
  }

  public update(): void {
    const current = this.current();
    current.forEach(attribute => {
      attribute.value = attribute.diceRoll.roll() * 5;
    });
    this.next(current);
  }

}
