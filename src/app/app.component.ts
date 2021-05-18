import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
import { AttributeActions } from './store/attrubutes/attributes.actions';
import { ProfessionsActions } from './store/professions/profesions.actions';
import { SkillActions } from './store/skills/skill.actions';

@Component({
  selector: 'coc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zc';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch([
      new AttributeActions.FetchAttributesInAttribute(),
      new SkillActions.FetchAll(),
      new ProfessionsActions.FetchAll()
    ]).pipe(take(1))
      .subscribe(_ => this.store.dispatch(new ProfessionsActions.CalcPointsForAll()));
  }
}
