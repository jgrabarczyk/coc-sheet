import { Component, OnInit } from '@angular/core';

import { AttributeService } from '../../services/attribute.service';
import { ProfessionService } from '../../services/profession.service';

@Component({
  selector: 'coc-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent implements OnInit {

  constructor(
    private attributeService_: AttributeService,
    private professionService_: ProfessionService
  ) { }

  ngOnInit(): void {
  }

  public generateAttributes(): void {
    this.attributeService_.randomize();
    this.recalculateProfessionPoints();
  }

  /**
   * get fresh data from backend
   */
  public reset(): void {
    this.attributeService_.fetchCollection();
    this.recalculateProfessionPoints();
  }


  private recalculateProfessionPoints(): void {
    this.professionService_.calcPointsForAll();
  }

}
