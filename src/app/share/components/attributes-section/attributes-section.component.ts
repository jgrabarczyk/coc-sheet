import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AttributeService } from 'src/app/share/services/attribute.service';

import { Attribute } from '../../classes/attribute';
import { ProfessionService } from '../../services/profession.service';
import { SkillService } from '../../services/skill.service';
import { StatService } from '../../services/stat.service';

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
    private professionService_: ProfessionService,
    private statService_: StatService,
    private skillService_: SkillService,

  ) { }

  get attributeList(): Attribute[] {
    return this.attributeList_;
  }

  ngOnInit(): void {
    this.subAttributes();
  }

  private subAttributes(): void {
    this.attributeService_.fetchAttributes();

    this.attributeService_.attributeList$.pipe(untilDestroyed(this)).subscribe(
      (list: Attribute[]) => {
        this.attributeList_ = list;
      },
      (error) => console.error(`error: ${error}`)
    );
  }



  public generateAttributes(): void {
    this.skillService_.getDefaultValues();
    this.attributeService_.update();
    this.professionService_.update();
    this.statService_.updateStats();

  }

  public reset(): void {
    this.attributeService_.fetchAttributes();
  }
}
