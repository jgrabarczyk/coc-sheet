import { Component, OnInit } from '@angular/core';
import { PROFESSION_LIST } from '../../data/professions';
import { Profession } from '../../classes/profession';
import { ProfessionService } from '../../services/profession.service';
import { MatListOption } from '@angular/material/list';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'coc-professions-section',
  templateUrl: './professions-section.component.html',
  styleUrls: ['./professions-section.component.scss']
})
export class ProfessionsSectionComponent implements OnInit {
  private professionList_: Profession[] = PROFESSION_LIST;

  constructor(
    private professionService_: ProfessionService,
    private skillService_: SkillService

  ) { }

  get professionList(): Profession[] {
    return this.professionList_;
  }

  public ngOnInit(): void {
    this.subProfessions();
  }

  private subProfessions(): void {
    this.professionService_.professionList$.subscribe(
      professionList => this.professionList_ = professionList,
    );
  }

  onGroupsChange(newOption: MatListOption[]): void {
    this.skillService_.disableAll();
    this.professionService_.updateCurrentProfession(newOption[0].value);
  }

}
