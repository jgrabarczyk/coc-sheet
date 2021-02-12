import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Stat } from 'src/app/sheet/interfaces/stat';

import { StatService } from '../../services/stat.service';

@UntilDestroy()
@Component({
  selector: 'coc-stat-section',
  templateUrl: './stat-section.component.html',
  styleUrls: ['./stat-section.component.scss']
})
export class StatSectionComponent implements OnInit {
  private statList_ !: Stat[];

  constructor(
    private statService_: StatService,

  ) { }

  get statList(): Stat[] {
    return this.statList_;
  }

  ngOnInit(): void {
    this.subStats();
  }

  private subStats(): void {
    this.statService_.statList$.pipe(untilDestroyed(this)).subscribe(
      (statList: Stat[]) => this.statList_ = statList,
      (error) => console.error(`error: ${error}`)
    );
  }
}
