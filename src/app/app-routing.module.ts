import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheetComponent } from './sheet/sheet.component';
import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';

const routes: Routes = [
  { path: 'new', component: StepperComponent },
  { path: '', component: SheetComponent },
  { path: '**', redirectTo: '', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
