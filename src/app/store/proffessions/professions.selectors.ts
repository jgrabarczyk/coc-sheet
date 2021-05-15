import { Selector } from '@ngxs/store';
import { Profession } from 'src/app/share/classes/profession';
import { Points } from 'src/app/share/interfaces/points';
import { ProfessionState, ProfessionStateModel } from './proffessions.state';

export class ProffesionsSelectors {

  @Selector([ProfessionState])
  static professions(state: ProfessionStateModel): Profession[] {
    return state.professions;
  }

  @Selector([ProfessionState])
  static points(state: ProfessionStateModel): Points{
    return state.points;
  }

  @Selector([ProfessionState])
  static currentProfession(state: ProfessionStateModel): Profession{
    return state.currentProfession as Profession;
  }

}
