import { Component, OnInit } from '@angular/core';
import { ATTRIBUTE_LIST } from './data/attributes';
import { Attribute } from './interfaces/attribute';
import { Skill } from './interfaces/skill';
import { SKILL_LIST } from './data/skills';
import { MOEVEMENT_STAT } from './data/stats';
import { Stat } from './interfaces/stat';

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

  ngOnInit(): void {
    this.attributeList_ = ATTRIBUTE_LIST;
    this.skillList_ = SKILL_LIST;
    this.initStats();
  }

  initStats(): void {
    this.initMovementStat();
    this.initSanity();
    this.initPW();
    this.initPM();
  }


  initMovementStat(): void {
    this.moevementStat_ = MOEVEMENT_STAT;
    const strenghtVal: number = this.getAttrVal('Siła');
    const bodyVal: number = this.getAttrVal('Budowa Ciała');
    const agilityVal: number = this.getAttrVal('Zręczność');

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

  initSanity(): void {
    this.sanityStat_ = {
      name: 'Poczytalność',
      value: 99 - this.getSkillVal('Mity Cthulhu'),
      currentValue: this.getAttrVal('Moc')
    };
    console.log(this.sanityStat_);

  }

  initPW(): void {
    const val = Math.floor((this.getAttrVal('Siła') + this.getAttrVal('Budowa Ciała')) / 10);
    this.pwStat_ = {
      name: 'PW',
      value: val,
      currentValue: val
    };
  }
  initPM(): void {
    const val = Math.floor(this.getAttrVal('Moc') / 5);
    this.pmStat_ = {
      name: 'Punkty Magii',
      value: val,
      currentValue: val
    };
  }
  private getAttrVal(name: string): number {
    return this.attributeList_.filter(el => el.name === name).map(el => el.value)[0];
  }
  private getSkillVal(name: string): number {
    return this.skillList_.filter(el => el.name === name).map(el => el.value)[0];
  }
}
