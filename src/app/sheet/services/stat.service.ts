import { Injectable } from '@angular/core';
import { Stat } from '../interfaces/stat';
import { STAT_NAME } from '../../share/enums/stat-name.enum';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';
import { MOEVEMENT_STAT } from '../../share/data/movement-stat';
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
  // private moStat_!: Stat;

  private strengthVal_ = this.attributeService_.getVal(ATTRIBUTE_NAME.STRENGTH);
  private bodyStructureVal_ = this.attributeService_.getVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
  private mightValue_ = this.attributeService_.getVal(ATTRIBUTE_NAME.MIGHT);

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
    // this.initMO();
    this.statsList_ = [];
    this.statsList_ = [
      this.moevementStat_,
      this.sanityStat_,
      this.pwStat_,
      this.pmStat_,
      // this.moStat_,
    ];
  }

  private initMovementStat(): void {
    this.moevementStat_ = MOEVEMENT_STAT;
    const agilityVal: number = this.attributeService_.getVal(ATTRIBUTE_NAME.AGILITY);
    let val = 0;

    if (this.strengthVal_ > this.bodyStructureVal_ && agilityVal > this.bodyStructureVal_) {
      val = 9;
    } else if (
      (this.strengthVal_ >= this.bodyStructureVal_ && agilityVal <= this.bodyStructureVal_) ||
      (this.strengthVal_ <= this.bodyStructureVal_ && agilityVal >= this.bodyStructureVal_) ||
      (this.strengthVal_ === this.bodyStructureVal_ && agilityVal === this.bodyStructureVal_)
    ) {
      val = 8;
    } else if (this.strengthVal_ < this.bodyStructureVal_ && agilityVal < this.bodyStructureVal_) {
      val = 7;
    }

    this.moevementStat_.currentValue = val;
    this.moevementStat_.value = val;
  }

  private initSanity(): void {
    this.sanityStat_ = {
      name: STAT_NAME.SANITY,
      value: 99 - this.skillService_.getVal(SKILL_NAME.CTHULHU_MYTHS),
      currentValue: this.mightValue_
    };
  }

  private initPW(): void {
    const val = Math.floor((this.strengthVal_ + this.bodyStructureVal_) / 10);

    this.pwStat_ = {
      name: STAT_NAME.HP,
      value: val,
      currentValue: val
    };
  }

  private initPM(): void {
    const val = Math.floor(this.mightValue_ / 5);

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
  // private initMO(): void {
  //   const attributesVal: number = this.strengthVal_ + this.bodyStructureVal_;
  //   let val = 0;
  //   if (attributesVal <= 64) {
  //     val = -2;
  //   } else if (attributesVal <= 84) {
  //     val = -1;

  //   } else if (attributesVal <= 124) {
  //     val = 0;

  //   } else if (attributesVal <= 164) {
  //     val = 1;

  //   } else if (attributesVal <= 204) {
  //     val = 2;
  //   }

  //   this.moStat_ = {
  //     name: STAT_NAME.DMG_MODIFIER,
  //     value: 0,
  //     currentValue: 0
  //   };
  // }
}
