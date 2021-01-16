import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Stat } from './interfaces/stat';
import { StatService } from '../share/services/stat.service';
import { ProfessionService } from '../share/services/profession.service';
import { Profession } from '../share/classes/profession';

@UntilDestroy()
@Component({
  selector: 'coc-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  private statList_ !: Stat[];
  private profession_!: Profession;
  constructor(
    private statService_: StatService,
    private professionService_: ProfessionService
  ) { }

  get statList(): Stat[] {
    return this.statList_;
  }

  get profession(): Profession {
    return this.profession_;
  }

  public ngOnInit(): void {
    this.subStats();
    this.subProfession();
  }

  private subStats(): void {
    this.statService_.statList$.pipe(untilDestroyed(this)).subscribe(
      (statList: Stat[]) => this.statList_ = statList,
      (error) => console.error(`error: ${error}`)
    );
  }
  private subProfession(): void {
    this.professionService_.currentProfession$.pipe(untilDestroyed(this)).subscribe(
      profession => this.profession_ = profession
    );
  }
}
