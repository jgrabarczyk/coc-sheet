import { createSelector, Selector } from '@ngxs/store';
import { Skill } from 'src/app/share/classes/skill';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';
import { SkillState, SkillStateModel } from './skill.state';


export class SkillSelectors {

  @Selector([SkillState])
  static skills(state: SkillStateModel): Skill[] {
    return state.skills;
  }

  static skill(name: SKILL_NAME): (state: SkillStateModel) => Skill {
    return createSelector(
      [SkillState],
      (state: SkillStateModel) => state.skills.find(el => el.name === name) as Skill
    );
  }

  static skillValue(name: SKILL_NAME): (skill: Skill) => number {
    return createSelector(
      [SkillSelectors.skill(name)],
      (skill: Skill) => skill.value
    );
  }


}
