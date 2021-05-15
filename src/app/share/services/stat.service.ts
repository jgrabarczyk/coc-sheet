import { Injectable } from '@angular/core';
import { STAT_NAME } from '../enums/stat-name.enum';
import { SKILL_NAME } from '../enums/skill-name-enum';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Stat } from '../../sheet/interfaces/stat';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngxs/store';
import { SkillSelectors } from 'src/app/store/skills/skill.selectors';
import { AttributeSelectors } from 'src/app/store/attrubutes/attributes.selectors';

@Injectable({
  providedIn: 'root'
})

/**
 * @TODO
 * add DMG modifier
 */
export class StatService {
  private moevementStat_!: Stat;
  private sanityStat_!: Stat;
  private pwStat_!: Stat;
  private pmStat_!: Stat;
  private statsList_!: Stat[];
  private statListSource = new BehaviorSubject<Stat[]>(this.statsList_);
  public statList$ = this.statListSource.asObservable();

  constructor(
    private store: Store,
  ) {
    this.updateStats();
  }

  public next(newList: Stat[]): void {
    this.statListSource.next(newList);
  }

  public updateStats(): void {
    this.calcMovementStat();
    this.calcSanity();
    this.calcPW();
    this.calcPM();
    this.refreshTable();
  }

  private refreshTable(): void {
    this.statsList_ = [];
    this.statsList_ = [
      this.moevementStat_,
      this.sanityStat_,
      this.pwStat_,
      this.pmStat_,
    ];
    this.next(this.statsList_);
  }

  private calcMovementStat(): void {

    const strengthVal = this.getAttributeVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyStructureVal = this.getAttributeVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
    const agilityVal = this.getAttributeVal(ATTRIBUTE_NAME.AGILITY);

    let val = 0;

    if (strengthVal > bodyStructureVal && agilityVal > bodyStructureVal) {
      val = 9;

    } else if (
      (strengthVal >= bodyStructureVal && agilityVal <= bodyStructureVal)
      || (strengthVal <= bodyStructureVal && agilityVal >= bodyStructureVal)
      || (strengthVal === bodyStructureVal && agilityVal === bodyStructureVal)
    ) {
      val = 8;

    } else if (strengthVal < bodyStructureVal && agilityVal < bodyStructureVal) {
      val = 7;
    }

    this.moevementStat_ = {
      name: STAT_NAME.MOEVEMENT,
      value: val,
      currentValue: val
    };
  }

  private calcSanity(): void {
    const mightValue = this.getAttributeVal(ATTRIBUTE_NAME.MIGHT);


    this.sanityStat_ = {
      name: STAT_NAME.SANITY,
      value: 99 - this.getSkillValue(SKILL_NAME.CTHULHU_MYTHS),
      currentValue: mightValue
    };
  }

  private calcPW(): void {
    const strengthVal = this.getAttributeVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyStructureVal = this.getAttributeVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
    const val = Math.floor((strengthVal + bodyStructureVal) / 10);

    this.pwStat_ = {
      name: STAT_NAME.HP,
      value: val,
      currentValue: val
    };
  }

  private calcPM(): void {
    const mightValue = this.getAttributeVal(ATTRIBUTE_NAME.MIGHT);
    const val = Math.floor(mightValue / 5);

    this.pmStat_ = {
      name: STAT_NAME.MP,
      value: val,
      currentValue: val
    };
  }

  private getAttributeVal(name: ATTRIBUTE_NAME): number {
    return this.store.selectSnapshot(AttributeSelectors.attributeValue(name));
  }

  private getSkillValue(name: SKILL_NAME): number {
    return this.store.selectSnapshot(SkillSelectors.skillValue(name));
  }
}
