import { Component, Input } from '@angular/core';

import { Stat } from '../../../../sheet/interfaces/stat';

@Component({
  selector: 'coc-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})

export class StatComponent {

  @Input('stat') public stat!: Stat;

}
