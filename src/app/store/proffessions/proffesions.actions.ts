import { Profession } from 'src/app/share/classes/profession';
import { Points } from 'src/app/share/interfaces/points';

export namespace ProfessionsActions {
  export class FetchAll {
    static readonly type = '[Professions API] Fetch professions';
  }

  export class CalcPointsForAll {
    static readonly type = '[Professions] Recalculate points for all professions';
  }

  export class UpdateCurrentProfession {
    static readonly type = '[Professions] Update current profession';
    constructor(public currentProfession: Profession) { }
  }

  export class UpdatePoints {
    static readonly type = '[Professions] Update points';
    constructor(public points: Points) { }
  }

}
