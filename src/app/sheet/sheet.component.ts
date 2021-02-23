import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';



@UntilDestroy()
@Component({
  selector: 'coc-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent {
}
