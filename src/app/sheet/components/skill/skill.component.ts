import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { AttributeComponent } from '../attribute/attribute.component';
import { Skill } from '../../interfaces/skill';
import { AttributeService } from '../../services/attribute.service';

@Component({
  selector: 'coc-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent extends AttributeComponent implements OnChanges {

  @Input('attribute') public skill!: Skill;
  constructor(private _attributeService: AttributeService) {
    super();
  }

  ngOnChanges(): void {
    this.initValues(this.skill);
    this.updateValues(this.skill);
  }

  initValues(skill: Skill): void {
    // enumy?
    if (skill.name === 'Język ojczysty') {
      skill.baseValue = this._attributeService.getAttribute('Wykształcenie').value;
    }

    // enumy?
    if (skill.name === 'Unik') {
      skill.baseValue = Math.floor(this._attributeService.getAttribute('Zręczność').value / 2);
    }

    if (skill.value < skill.baseValue) {
      const tempVal: number = skill.value; skill.value = 0;
      skill.value = skill.baseValue + tempVal;
    }
  }
}
