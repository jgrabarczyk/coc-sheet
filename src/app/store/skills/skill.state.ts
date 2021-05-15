import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Skill, SkillDTO } from 'src/app/share/classes/skill';
import { SkillRestService } from 'src/app/share/services/rest/skill-rest.service';
import { SkillActions } from './skill.actions';

export class SkillStateModel {
  skills!: Skill[];
}

@State<SkillStateModel>({
  name: 'Skills',
  defaults: {
    skills: [],
  }
})

@Injectable()
export class SkillState {

  constructor(
    private skillRestService_: SkillRestService
  ) { }

  @Action(SkillActions.FetchAll)
  fetch(
    { patchState }: StateContext<SkillStateModel>,
  ): Observable<any[]> {

    return this.skillRestService_.getAll().pipe(tap(
      (skills: SkillDTO[]) =>
        patchState({
          skills: skills.map(skill => new Skill(skill))
        })

    ));
  }

  @Action(SkillActions.Reset)
  reset(
    { patchState, getState }: StateContext<SkillStateModel>,
  ): void {
    const newSkills = getState().skills;
    newSkills.forEach(skill => skill.reset());
    patchState({
      skills: newSkills
    });
  }

  @Action(SkillActions.Save)
  save(
    { patchState, getState }: StateContext<SkillStateModel>,
  ): void {
    const newSkills = getState().skills;
    newSkills.forEach(skill => skill.save());
    patchState({
      skills: newSkills
    });
  }

  @Action(SkillActions.DisableAll)
  disableAll(
    { patchState, getState }: StateContext<SkillStateModel>,
  ): void {
    const newSkills = getState().skills;
    newSkills.forEach((skill: Skill) => {
      skill.disabled = true;
    });
    patchState({
      skills: newSkills
    });
  }

  @Action(SkillActions.EnableAll)
  enableAll(
    { patchState, getState }: StateContext<SkillStateModel>,
  ): void {
    const newSkills = getState().skills;
    newSkills.forEach(skill => skill.disabled = false);
    patchState({
      skills: newSkills
    });
  }

  @Action(SkillActions.UpdateSkills)
  updateSkills(
    { patchState, }: StateContext<SkillStateModel>,
    { skills }: SkillActions.UpdateSkills
  ): void {
    patchState({ skills });
  }

}
