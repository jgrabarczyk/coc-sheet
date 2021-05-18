import { Selector } from '@ngxs/store';
import { Stat } from 'src/app/sheet/interfaces/stat';
import { StatState, StatStateModel } from './stats.state';

export class StatSelectors {
  @Selector([StatState])
  static statList(state: StatStateModel): Stat[]{
    return Object.entries(state).map(el => el[1]);
  }
}
