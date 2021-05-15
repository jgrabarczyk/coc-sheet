import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AttributeActions } from 'src/app/store/attrubutes/attributes.actions';
import { AttributeSelectors } from 'src/app/store/attrubutes/attributes.selectors';
import { Attribute } from '../../../classes/attribute';

@UntilDestroy()
@Component({
  selector: 'coc-attributes-section',
  templateUrl: './attributes-section.component.html',
  styleUrls: ['./attributes-section.component.scss']
})
export class AttributesSectionComponent implements OnInit {
  @Select(AttributeSelectors.attributes)
  public attributes$!: Observable<Attribute[]>;

  @Input('enable-roll') enableRoll = false;

  constructor(
    private store: Store
  ) { }


  ngOnInit(): void {
    this.subAttributes();
  }

  private subAttributes(): void {
    this.store.dispatch(new AttributeActions.FetchAttributes());
  }


}
