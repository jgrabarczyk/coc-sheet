import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Skill } from '../share/classes/skill';
import { Stat } from './interfaces/stat';
import { SkillService } from '../share/services/skill.service';
import { StatService } from '../share/services/stat.service';

@UntilDestroy()
@Component({
  selector: 'coc-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  private skillList_!: Skill[];
  private statList_ !: Stat[];

  constructor(
    private skillService_: SkillService,
    private statService_: StatService
  ) { }

  get skillList(): Skill[] {
    return this.skillList_;
  }

  get statList(): Stat[] {
    return this.statList_;
  }

  public ngOnInit(): void {
    this.subSkills();
    this.subStats();
  }

  private subSkills(): void {
    this.skillService_.skillList$.pipe(untilDestroyed(this)).subscribe(
      (list: Skill[]) => this.skillList_ = list,
      (error) => console.error(`error: ${error}`)
    );
  }

  private subStats(): void {
    this.statService_.statList$.subscribe(
      (statList: Stat[]) => this.statList_ = statList,
      (error) => console.error(`error: ${error}`)
    );
  }

}
