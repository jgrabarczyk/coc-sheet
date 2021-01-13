import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Skill } from './classes/skill';
import { Stat } from './interfaces/stat';
import { Attribute } from './classes/attribute';

import { AttributeService } from './services/attribute.service';
import { SkillService } from './services/skill.service';
import { StatService } from './services/stat.service';
import { Proffesion, PROFFESION_LIST } from '../share/data/professions';

@UntilDestroy()
@Component({
  selector: 'coc-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  private attributeList_!: Attribute[];
  private skillList_!: Skill[];
  private proffessionList_: Proffesion[] = PROFFESION_LIST;

  constructor(
    private attributeService_: AttributeService,
    private skillService_: SkillService,
    private statService_: StatService
  ) { }

  get proffessionList(): Proffesion[] {
    return this.proffessionList_;
  }

  get attributeList(): Attribute[] {
    return this.attributeList_;
  }

  get skillList(): Skill[] {
    return this.skillList_;
  }

  get statList(): Stat[] {
    return this.statService_.statsList;
  }

  public ngOnInit(): void {
    this.subAttributes();
    this.subSkills();
  }

  private subAttributes(): void {
    this.attributeService_.attributeList$.pipe(untilDestroyed(this)).subscribe(
      (list: Attribute[]) => this.attributeList_ = list,
      (error) => console.error(`error: ${error}`)
    );
  }

  private subSkills(): void {
    this.skillService_.skillList$.pipe(untilDestroyed(this)).subscribe(
      (list: Skill[]) => this.skillList_ = list,
      (error) => console.error(`error: ${error}`)
    );
  }

  public generateAttributes(): void {
    /**
     * @TODO move to service, left only tick like in statService
     */
    this.attributeList_.forEach(attribute => {
      attribute.value = attribute.diceRoll.roll() * 5;
    });
    this.attributeService_.next(this.attributeList_);

    this.statService_.updateStats();

    /**
     * @TODO move to service, left only tick like in statService
     */
    this.proffessionList_.forEach(el =>
      el.calcPoints());
  }

}
