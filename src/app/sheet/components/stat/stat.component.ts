import { Component, OnInit, Input } from '@angular/core';
import { Stat } from '../../interfaces/stat';

@Component({
  selector: 'coc-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  @Input('stat') public stat!: Stat;

  constructor() { }

  ngOnInit(): void {
  }

}
