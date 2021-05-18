import { Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AttributeSelectors } from 'src/app/store/attrubutes/attributes.selectors';
import { Attribute } from '../../../classes/attribute';

@UntilDestroy()
@Component({
  selector: 'coc-attributes-section',
  templateUrl: './attributes-section.component.html',
  styleUrls: ['./attributes-section.component.scss']
})
export class AttributesSectionComponent  {
  @Select(AttributeSelectors.attributes)
  public attributes$!: Observable<Attribute[]>;

  @Input('enable-roll') enableRoll = false;
}
