import { Component, Input, OnInit } from '@angular/core';
import { AttributeComponent } from '../attribute/attribute.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { SKILL_NAME } from '../../../share/enums/skill-name-enum';
import { ATTRIBUTE_NAME } from '../../../share/enums/attribute-name.enum';
import { ATTRIBUTE_LIST } from '../../../share/data/attributes';

import { Attribute } from '../../classes/attribute';
import { Skill } from '../../classes/skill';
import { AttributeService } from '../../services/attribute.service';

@UntilDestroy()
@Component({
  selector: 'coc-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent extends AttributeComponent implements OnInit {
  @Input('attribute') skill_!: Skill;
  private basicList_: Attribute[] = ATTRIBUTE_LIST;
  constructor(private attributeService_: AttributeService) {
    super();
  }

  get skill(): Skill {
    return this.skill_;
  }

  ngOnInit(): void {
    this.initValues();
    this.updateOnAttributeChange();
  }

  updateOnAttributeChange(): void {
    this.attributeService_.attributeList$.pipe(untilDestroyed(this)).subscribe(
      _ => {
        this.initValues();
      }
    );
  }

  private initValues(): void {
    if (this.skill_.name === SKILL_NAME.LANGUAGE_NATIVE) {
      this.skill_.baseValue = this.getAttribute(ATTRIBUTE_NAME.EDUCATION).value;
      this.skill_.value = this.getAttribute(ATTRIBUTE_NAME.EDUCATION).value;
    }

    if (this.skill_.name === SKILL_NAME.DODGE) {
      this.skill_.baseValue = Math.floor(this.getAttribute(ATTRIBUTE_NAME.AGILITY).value / 2);
      this.skill_.value = Math.floor(this.getAttribute(ATTRIBUTE_NAME.AGILITY).value / 2);

    }

    if (this.skill.value < this.skill.baseValue) {
      const tempVal: number = this.skill.value;
      this.skill.value = 0;
      this.skill.value = this.skill.baseValue + tempVal;
    }

  }

  private getAttribute(name: string): Attribute {
    return this.basicList_.filter(el => el.name === name)[0];
  }

}
