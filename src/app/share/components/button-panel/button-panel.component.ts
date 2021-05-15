import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AttributeActions } from 'src/app/store/attrubutes/attributes.actions';
import { ProfessionsActions } from 'src/app/store/proffessions/proffesions.actions';

@Component({
  selector: 'coc-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent  {

  constructor(
    private store: Store,
  ) { }


  public generateAttributes(): void {
    this.store.dispatch(new AttributeActions.RandomizeAttributes());
    this.recalculateProfessionPoints();
  }

  /**
   * get fresh data from backend
   */
  public reset(): void {
    this.store.dispatch(new AttributeActions.FetchAttributes());
    this.recalculateProfessionPoints();
  }


  private recalculateProfessionPoints(): void {
    this.store.dispatch(new ProfessionsActions.CalcPointsForAll());
  }

}
