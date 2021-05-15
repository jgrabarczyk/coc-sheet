import { Skill } from 'src/app/share/classes/skill';

export namespace SkillActions {

  export class FetchAll {
    static readonly type = '[Skills API] Fetch skills';
  }

  export class Reset {
    static readonly type = '[Skill] Reset skills';

  }

  export class Save {
    static readonly type = '[Skill] Save skills';

  }

  export class DisableAll {
    static readonly type = '[Skill] Disable all skill\'s slots';

  }

  export class EnableAll {
    static readonly type = '[Skill] Enable all skill\'s slots';
  }

  export class UpdateSkills {
    static readonly type = '[Skill] Update skills';
    constructor(public skills: Skill[]) { }

  }

}
