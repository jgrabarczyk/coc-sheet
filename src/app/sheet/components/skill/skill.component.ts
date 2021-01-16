import { Component, Input, OnInit } from '@angular/core';
import { AttributeComponent } from '../attribute/attribute.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { SKILL_NAME } from '../../../share/enums/skill-name-enum';
import { ATTRIBUTE_NAME } from '../../../share/enums/attribute-name.enum';

import { Skill } from '../../../share/classes/skill';
import { AttributeService } from '../../../share/services/attribute.service';

@UntilDestroy()
@Component({
  selector: 'coc-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent extends AttributeComponent implements OnInit {
  @Input('attribute') skill_!: Skill;

  constructor(private attributeService_: AttributeService) {
    super();
  }

  get skill(): Skill {
    return this.skill_;
  }

  public ngOnInit(): void {
    this.initValues();
    this.updateOnAttributeChange();
  }

  private updateOnAttributeChange(): void {
    this.attributeService_.attributeList$.pipe(untilDestroyed(this)).subscribe(
      _ => {
        this.initValues();
      }
    );
  }

  private initValues(): void {
    if (this.skill_.name === SKILL_NAME.LANGUAGE_NATIVE) {
      this.skill_.baseValue = this.attributeService_.getVal(ATTRIBUTE_NAME.EDUCATION);
      this.skill_.value = this.skill_.baseValue;
    }

    if (this.skill_.name === SKILL_NAME.DODGE) {
      this.skill_.baseValue = Math.floor(this.attributeService_.getVal(ATTRIBUTE_NAME.AGILITY) / 2);
      this.skill_.value = this.skill_.baseValue;
    }

    if (this.skill.value < this.skill.baseValue) {
      const tempVal: number = this.skill.value;
      this.skill.value = 0;
      this.skill.value = this.skill.baseValue + tempVal;
    }

  }

  public reset(): void {
    this.skill_.reset();
  }
}
