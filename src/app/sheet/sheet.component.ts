import { Component, OnInit } from '@angular/core';
import { ATTRIBUTE_LIST } from './data/attributes';
import { Attribute } from './interfaces/attribute';
import { Skill } from './interfaces/skill';
import { SKILL_LIST } from './data/skills';
import { MOEVEMENT_STAT } from './data/movement-stat';
import { Stat } from './interfaces/stat';
import { SKILL_NAME } from './data/skill-name-enum';
import { ATTRIBUTE_NAME } from './data/attribute-name.enum';
import { STAT_NAME } from '../share/enums/stat-name.enum';

@Component({
  selector: 'coc-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  private attributeList_!: Attribute[];
  private skillList_!: Skill[];
  private moevementStat_!: Stat;
  private sanityStat_!: Stat;
  private pwStat_!: Stat;
  private pmStat_!: Stat;
  private moStat_!: Stat;
  constructor() { }

  get attributeList(): Attribute[] {
    return this.attributeList_;
  }

  get skillList(): Skill[] {
    return this.skillList_;
  }

  get moevementStat(): Stat {
    return this.moevementStat_;
  }

  get sanityStat(): Stat {
    return this.sanityStat_;
  }

  get pwStat(): Stat {
    return this.pwStat_;
  }

  get pmStat(): Stat {
    return this.pmStat_;
  }
  get moStat(): Stat {
    return this.moStat_;
  }

  ngOnInit(): void {
    this.attributeList_ = ATTRIBUTE_LIST;
    this.skillList_ = SKILL_LIST;
    this.initStats();
  }

  private initStats(): void {
    this.initMovementStat();
    this.initSanity();
    this.initPW();
    this.initPM();
    this.initMO();
  }

  private initMovementStat(): void {
    this.moevementStat_ = MOEVEMENT_STAT;
    const strenghtVal: number = this.getAttributeVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyVal: number = this.getAttributeVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
    const agilityVal: number = this.getAttributeVal(ATTRIBUTE_NAME.AGILITY);

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
      value: 99 - this.getSkillVal(SKILL_NAME.CTHULHU_MYTHS),
      currentValue: this.getAttributeVal(ATTRIBUTE_NAME.MIGHT)
    };
  }

  private initPW(): void {
    const val = Math.floor((this.getAttributeVal(ATTRIBUTE_NAME.STRENGTH) + this.getAttributeVal(ATTRIBUTE_NAME.BODY_STRUCTURE)) / 10);
    this.pwStat_ = {
      name: STAT_NAME.HP,
      value: val,
      currentValue: val
    };
  }

  private initPM(): void {
    const val = Math.floor(this.getAttributeVal(ATTRIBUTE_NAME.MIGHT) / 5);
    this.pmStat_ = {
      name: STAT_NAME.MP,
      value: val,
      currentValue: val
    };
  }

  private initMO(): void {
    this.moStat_ = {
      name: STAT_NAME.DMG_MODIFIER,
      value: 0,
      currentValue: 0
    };
  }

  private getAttributeVal(name: ATTRIBUTE_NAME): number {
    return this.attributeList_.filter(el => el.name === name).map(el => el.value)[0];
  }
  private getSkillVal(name: SKILL_NAME): number {
    return this.skillList_.filter(el => el.name === name).map(el => el.value)[0];
  }
}
