import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AttributeService } from 'src/app/share/services/attribute.service';

import { Attribute } from '../../../classes/attribute';

@UntilDestroy()
@Component({
  selector: 'coc-attributes-section',
  templateUrl: './attributes-section.component.html',
  styleUrls: ['./attributes-section.component.scss']
})
export class AttributesSectionComponent implements OnInit {
  private attributeList_!: Attribute[];

  @Input('enable-roll') enableRoll = false;

  constructor(
    private attributeService_: AttributeService,
  ) { }

  get attributeList(): Attribute[] {
    return this.attributeList_;
  }

  ngOnInit(): void {
    this.subAttributes();
  }

  private subAttributes(): void {
    this.attributeService_.fetchCollection();

    this.attributeService_.stream$.pipe(untilDestroyed(this)).subscribe(
      (list: Attribute[]) => this.attributeList_ = list,
      (error) => console.error(`error: ${error}`)
    );
  }


}
