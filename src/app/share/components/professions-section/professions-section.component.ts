import { Component } from '@angular/core';
import { PROFESSION_LIST } from '../../data/professions';
import { Profession } from '../../classes/profession';

@Component({
  selector: 'coc-professions-section',
  templateUrl: './professions-section.component.html',
  styleUrls: ['./professions-section.component.scss']
})
export class ProfessionsSectionComponent {
  private professionList_: Profession[] = PROFESSION_LIST;

  constructor() { }

  get professionList(): Profession[] {
    return this.professionList_;
  }
}
