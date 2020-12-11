import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../../interfaces/attribute';

@Component({
  selector: 'coc-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {

  public half!: number;
  public extreme!: number;
  @Input('attribute') attribute!: Attribute;


  constructor() { }

  ngOnChanges(): void {
    this.updateValues(this.attribute);
  }

  updateValues(attribute: Attribute) {
    if (!attribute) { return; }

    this.half = Math.floor(attribute.value / 2);
    this.extreme = Math.floor(attribute.value / 5);

  }
}
