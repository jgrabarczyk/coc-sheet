import { Injectable } from '@angular/core';
import { State, Action, StateContext, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Attribute } from 'src/app/share/classes/attribute';
import { Profession, ProfessionDTO } from 'src/app/share/classes/profession';
import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { Points } from 'src/app/share/interfaces/points';
import { ProfessionRestService } from 'src/app/share/services/rest/profession-rest.service';
import { AttributeSelectors } from '../attrubutes/attributes.selectors';
import { ProfessionsActions } from './profesions.actions';

export class ProfessionStateModel {
  professions!: Profession[];
  currentProfession?: Profession;
  points!: Points;
}

@State<ProfessionStateModel>({
  name: 'Professions',
  defaults: {
    professions: [],
    points: {
      profession: 0,
      hobby: 0,
    }
  }
})

@Injectable()
export class ProfessionState {

  constructor(
    private professionsService: ProfessionRestService,
    private store: Store
  ) { }

  @Action(ProfessionsActions.FetchAll)
  fetch(
    { patchState }: StateContext<ProfessionStateModel>,
  ): Observable<any[]> {

    return this.professionsService.getAll().pipe(tap(
      (proefessions: ProfessionDTO[]) =>
        patchState({
          professions: proefessions.map(skill => new Profession(skill))
        })

    ));
  }
  @Action(ProfessionsActions.CalcPointsForAll)
  calcPointsForAll(
    ctxProffessions: StateContext<ProfessionStateModel>,
  ): void {
    const attributes: Attribute[] = this.store.selectSnapshot(AttributeSelectors.attributes);
    const int: Attribute = attributes.find(el => el.name === ATTRIBUTE_NAME.INTELLIGENCE) as Attribute;
    const list: Profession[] = ctxProffessions.getState().professions;

    list.forEach(el => el.calcPoints(int, attributes));

    ctxProffessions.patchState({
      professions: list
    });
  }

  @Action(ProfessionsActions.UpdateCurrentProfession)
  updateCurrentProfession(
    { patchState }: StateContext<ProfessionStateModel>,
    { currentProfession }: ProfessionsActions.UpdateCurrentProfession
  ): void {
    patchState({ currentProfession });

  }
  @Action(ProfessionsActions.UpdatePointsInSkillSection)
  updatePoints(
    { patchState }: StateContext<ProfessionStateModel>,
    { points }: ProfessionsActions.UpdatePointsInSkillSection
  ): void {
    patchState({ points });

  }
}
