import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';

const routes: Routes = [
  { path: '', component: StepperComponent },
  // { path: '', component: SheetComponent },
  // { path: '**', redirectTo: '', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
