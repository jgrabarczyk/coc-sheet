import { Injectable } from '@angular/core';
import { State, Action, StateContext, Store } from '@ngxs/store';
import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';
import { STAT_NAME } from 'src/app/share/enums/stat-name.enum';
import { Stat } from 'src/app/sheet/interfaces/stat';
import { AttributeSelectors } from '../attrubutes/attributes.selectors';
import { SkillSelectors } from '../skills/skill.selectors';
import { StatsActions } from './stats.actions';

export class StatStateModel {
  moevementStat?: Stat;
  sanityStat?: Stat;
  pwStat?: Stat;
  pmStat?: Stat;
}

@State<StatStateModel>({
  name: 'Stats',
  defaults: {
  }
})

@Injectable()
export class StatState {

  constructor(
    private store: Store
  ) { }

  @Action(StatsActions.UpdateStats)
  fetch(
    { patchState }: StateContext<StatStateModel>,
  ): void {

    patchState({});
  }

  @Action(StatsActions.CalcMovementStat)
  calcMovementStat(
    { patchState }: StateContext<StatStateModel>,
  ): void {

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

    patchState({
      moevementStat: {
        name: STAT_NAME.MOEVEMENT,
        value: val,
        currentValue: val
      }
    });
  }

  @Action(StatsActions.CalcSanity)
  calcSanity(
    { patchState }: StateContext<StatStateModel>,
  ): void {
    const mightValue = this.getAttributeVal(ATTRIBUTE_NAME.MIGHT);

    patchState({
      sanityStat: {
        name: STAT_NAME.SANITY,
        value: 99 - this.getSkillValue(SKILL_NAME.CTHULHU_MYTHS),
        currentValue: mightValue
      }
    });
  }


  @Action(StatsActions.CalcPW)
  calcPW(
    { patchState }: StateContext<StatStateModel>,
  ): void {
    const strengthVal = this.getAttributeVal(ATTRIBUTE_NAME.STRENGTH);
    const bodyStructureVal = this.getAttributeVal(ATTRIBUTE_NAME.BODY_STRUCTURE);
    const val = Math.floor((strengthVal + bodyStructureVal) / 10);

    patchState({
      pwStat: {
        name: STAT_NAME.HP,
        value: val,
        currentValue: val
      }
    });
  }


  @Action(StatsActions.CalcPM)
  calcPM(
    { patchState }: StateContext<StatStateModel>,
  ): void {
    const mightValue = this.getAttributeVal(ATTRIBUTE_NAME.MIGHT);
    const val = Math.floor(mightValue / 5);

    patchState({
      pmStat: {
        name: STAT_NAME.MP,
        value: val,
        currentValue: val
      }
    });
  }

  private getAttributeVal(name: ATTRIBUTE_NAME): number {
    const val: number = this.store.selectSnapshot(AttributeSelectors.attributeValue(name));
    return val ? val : 0;
  }

  private getSkillValue(name: SKILL_NAME): number {
    const val: number = this.store.selectSnapshot(SkillSelectors.skill(name))?.value;
    return val ? val : 0;
  }
}
