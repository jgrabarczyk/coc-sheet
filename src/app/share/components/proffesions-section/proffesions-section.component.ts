import { Component } from '@angular/core';
import { PROFFESION_LIST } from '../../data/professions';
import { Proffesion } from '../../classes/proffesion';

@Component({
  selector: 'coc-proffesions-section',
  templateUrl: './proffesions-section.component.html',
  styleUrls: ['./proffesions-section.component.scss']
})
export class ProffesionsSectionComponent {
  private proffessionList_: Proffesion[] = PROFFESION_LIST;

  constructor() { }

  get proffessionList(): Proffesion[] {
    return this.proffessionList_;
  }
}
