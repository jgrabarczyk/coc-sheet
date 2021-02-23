import { Component, Input } from '@angular/core';

import { BasicAttribute } from '../../../classes/basic-attribute';

@Component({
  selector: 'coc-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})

export class AttributeComponent {

  public extreme!: number;
  @Input('attribute') attribute!: BasicAttribute;

}
