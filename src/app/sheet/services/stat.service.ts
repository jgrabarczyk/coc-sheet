import { Injectable } from '@angular/core';
import { Stat } from '../interfaces/stat';
import { STAT_NAME } from '../../share/enums/stat-name.enum';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';
import { MOEVEMENT_STAT } from '../data/movement-stat';
import { AttributeService } from './attribute.service';
import { SKILL_NAME } from '../../share/enums/skill-name-enum';
import { SkillService } from './skill.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private statsList_!: Stat[];
  private moevementStat_!: Stat;
  private sanityStat_!: Stat;
  private pwStat_!: Stat;
  private pmStat_!: Stat;
  private moStat_!: Stat;

  get statsList(): Stat[] {
    return this.statsList_;
  }


  constructor(
    private attributeService_: AttributeService,
    private skillService_: SkillService
  ) {
    this.updateStats();
  }

  public updateStats(): void {
    this.initMovementStat();
    this.initSanity();
    this.initPW();
    this.initPM();
    this.initMO();
    this.statsList_ = [];
    this.statsList_ = [
      this.moevementStat_,
      this.sanityStat_,
      this.pwStat_,
      this.pmStat_,
      this.moStat_,
    ];
  }

  private initMovementStat(): void {
    this.moevementStat_ = MOEVEMENT_STAT;
    const strenghtVal: number = this.attributeService_.getVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyVal: number = this.attributeService_.getVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
    const agilityVal: number = this.attributeService_.getVal(ATTRIBUTE_NAME.AGILITY);

    let val = 0;

    if (strenghtVal > bodyVal && agilityVal > bodyVal) {
      val = 9;
    } else if (
      (strenghtVal >= bodyVal && agilityVal <= bodyVal) ||
      (strenghtVal <= bodyVal && agilityVal >= bodyVal) ||
      (strenghtVal === bodyVal && agilityVal === bodyVal)
    ) {
      val = 8;
    } else if (strenghtVal < bodyVal && agilityVal < bodyVal) {
      val = 7;
    }

    this.moevementStat_.currentValue = val;
    this.moevementStat_.value = val;
  }

  private initSanity(): void {
    this.sanityStat_ = {
      name: STAT_NAME.SANITY,
      value: 99 - this.skillService_.getVal(SKILL_NAME.CTHULHU_MYTHS),
      currentValue: this.attributeService_.getVal(ATTRIBUTE_NAME.MIGHT)
    };
  }

  private initPW(): void {
    const strengthVal = this.attributeService_.getVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyStructureVal = this.attributeService_.getVal(ATTRIBUTE_NAME.BODY_STRUCTURE);

    const val = Math.floor((strengthVal + bodyStructureVal) / 10);

    this.pwStat_ = {
      name: STAT_NAME.HP,
      value: val,
      currentValue: val
    };
  }

  private initPM(): void {
    const mightValue = this.attributeService_.getVal(ATTRIBUTE_NAME.MIGHT);

    const val = Math.floor(mightValue / 5);

    this.pmStat_ = {
      name: STAT_NAME.MP,
      value: val,
      currentValue: val
    };
  }

  /**
   * @TODO
   * implements dmg modifier mechanic
   */
  private initMO(): void {
    this.moStat_ = {
      name: STAT_NAME.DMG_MODIFIER,
      value: 0,
      currentValue: 0
    };
  }
}
