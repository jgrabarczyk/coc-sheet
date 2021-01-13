import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BasicAttribute } from '../../interfaces/attribute';
@Component({
  selector: 'coc-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeComponent {

  public half!: number;
  public extreme!: number;
  @Input('attribute') attribute!: BasicAttribute;

  constructor(private changeRef_: ChangeDetectorRef) { }

  ngDoCheck(): void {
    this.updateValues(this.attribute);
    this.changeRef_.detectChanges();
  }
  updateValues(attribute: BasicAttribute): void {
    if (!attribute) { return; }

    const half = Math.floor(attribute.value / 2);
    const extreme = Math.floor(attribute.value / 5);

    this.half = half === 0 && attribute.value ? 1 : half;
    this.extreme = extreme === 0 && attribute.value ? 1 : extreme;

  }
}
