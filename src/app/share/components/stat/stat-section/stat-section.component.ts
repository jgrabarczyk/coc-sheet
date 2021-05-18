import { Attribute, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import * as _ from 'lodash';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { Skill } from 'src/app/share/classes/skill';
import { Stat } from 'src/app/sheet/interfaces/stat';
import { AttributeSelectors } from 'src/app/store/attrubutes/attributes.selectors';
import { SkillSelectors } from 'src/app/store/skills/skill.selectors';
import { StatsActions } from 'src/app/store/stats/stats.actions';
import { StatSelectors } from 'src/app/store/stats/stats.selectors';

@UntilDestroy()
@Component({
  selector: 'coc-stat-section',
  templateUrl: './stat-section.component.html',
  styleUrls: ['./stat-section.component.scss']
})
export class StatSectionComponent implements OnInit {
  @Select(AttributeSelectors.attributes)
  attributes$!: Observable<Attribute[]>;

  @Select(SkillSelectors.skills)
  skills$!: Observable<Skill[]>;

  @Select(StatSelectors.statList)
  statList$!: Observable<Stat[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.subStats();
  }

  private subStats(): void {
    combineLatest([this.attributes$, this.skills$])
      .pipe(
        distinctUntilChanged((a, b) => _.isEqual(a, b)),
        filter(
          ([a, b]: [Attribute[], Skill[]]) => Boolean(a.length) && Boolean(b.length)
        )
      )
      .subscribe(__ => {
        this.store.dispatch([
          new StatsActions.CalcMovementStat(),
          new StatsActions.CalcSanity(),
          new StatsActions.CalcPW(),
          new StatsActions.CalcPM(),
        ]);
      });
  }
}
