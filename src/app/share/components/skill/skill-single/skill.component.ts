import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/share/classes/skill';
import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';
import { AttributeSelectors } from 'src/app/store/attrubutes/attributes.selectors';

import { AttributeComponent } from '../../attribute/attribute-single/attribute.component';



@UntilDestroy()
@Component({
  selector: 'coc-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})

export class SkillComponent extends AttributeComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() skillChange = new EventEmitter<Skill>();
  @Input() pointsToSpend!: number;

  @Select(AttributeSelectors.attributes)
  attributes$!: Observable<Attribute[]>;

  constructor(
    private store: Store
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initValues();
    this.updateOnAttributeChange();
  }


  private updateOnAttributeChange(): void {
    this.attributes$
      .pipe(untilDestroyed(this))
      .subscribe(
        _ => this.initValues(),
        (error) => console.error(`error: ${error}`)
      );
  }

  private initValues(): void {
    if (this.skill.name === SKILL_NAME.LANGUAGE_NATIVE) {
      this.skill.baseValue = this.getAttributeVal(ATTRIBUTE_NAME.EDUCATION);
      this.skill.value = this.skill.baseValue;
    }

    if (this.skill.name === SKILL_NAME.DODGE) {
      this.skill.baseValue = Math.floor(this.getAttributeVal(ATTRIBUTE_NAME.AGILITY) / 2);
      this.skill.value = this.skill.baseValue;
    }

    if (this.skill.value < this.skill.baseValue) {
      const tempVal: number = this.skill.value;
      this.skill.value = 0;
      this.skill.value = this.skill.baseValue + tempVal;
    }
  }

  public reset(): void {
    this.skill.value = this.skill.baseValue;
    this.skillChange.emit(this.skill);
  }


  public update(event: any): void {
    let val: number = Number((event.target as HTMLInputElement).value);
    // limit max value to 99
    val = val > 99 ? 99 : val;
    // limit min value to skill.baseValue
    val = val < this.skill.baseValue ? this.skill.baseValue : val;
    // check by how much the value has changed
    const diferrence: number = (val - this.skill.value);
    const pointsLeft: number = this.pointsToSpend - diferrence;

    // set skill value to val
    // if poinsLeft is negative number it decrase val prevent go over pontsToSpend cap
    this.skill.value = pointsLeft > 0 ? val : val + (pointsLeft);

    // assign modified value to input
    event.target.value = this.skill.value;
    this.skillChange.emit(this.skill);
  }

  private getAttributeVal(name: ATTRIBUTE_NAME): number {
    return this.store.selectSnapshot(AttributeSelectors.attributeValue(name));
  }
}
