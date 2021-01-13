import { Component, Input, OnChanges } from '@angular/core';
import { Attribute } from '../../interfaces/attribute';
@Component({
  selector: 'coc-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnChanges {

  public half!: number;
  public extreme!: number;
  @Input('attribute') attribute!: Attribute;

  constructor() { }

  ngOnChanges(): void {
    this.updateValues(this.attribute);
  }

  updateValues(attribute: Attribute): void {
    if (!attribute) { return; }

    const half = Math.floor(attribute.value / 2);
    const extreme = Math.floor(attribute.value / 5);

    this.half = half === 0 && attribute.value ? 1 : half;
    this.extreme = extreme === 0 && attribute.value ? 1 : extreme;

  }
}
