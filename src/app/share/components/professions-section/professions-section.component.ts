import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProffesionsSelectors } from 'src/app/store/proffessions/professions.selectors';
import { ProfessionsActions } from 'src/app/store/proffessions/proffesions.actions';
import { SkillActions } from 'src/app/store/skills/skill.actions';

import { Profession } from '../../classes/profession';

@Component({
  selector: 'coc-professions-section',
  templateUrl: './professions-section.component.html',
  styleUrls: ['./professions-section.component.scss']
})
export class ProfessionsSectionComponent {
  @Select(ProffesionsSelectors.professions)
  professions$!: Observable<Profession[]>;

  private professionList_: Profession[] = [];

  constructor(
    private store: Store
  ) { }

  get professionList(): Profession[] {
    return this.professionList_;
  }

  onGroupsChange(newOption: MatListOption[]): void {
    const profession: Profession = newOption[0].value;
    console.log('on group change update points');
    this.store.dispatch([
      new SkillActions.DisableAll(),
      new ProfessionsActions.UpdateCurrentProfession(profession),
      new ProfessionsActions.UpdatePoints({
        hobby: profession.pointsHobby,
        profession: profession.pointsProfession
      })
    ]);
  }


}
