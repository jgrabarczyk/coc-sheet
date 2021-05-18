import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProfessionsActions } from 'src/app/store/professions/profesions.actions';
import { ProffesionsSelectors } from 'src/app/store/professions/professions.selectors';
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

  constructor(
    private store: Store
  ) { }

  onGroupsChange(newOption: MatListOption[]): void {
    const profession: Profession = newOption[0].value;
    this.store.dispatch([
      new SkillActions.DisableAll(),
      new ProfessionsActions.UpdateCurrentProfession(profession),
      new ProfessionsActions.UpdatePointsInProfessionSection({
        hobby: profession.pointsHobby,
        profession: profession.pointsProfession
      })
    ]);
  }
}
