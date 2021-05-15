import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
import { ProfessionsActions } from 'src/app/store/proffessions/proffesions.actions';

@Component({
  selector: 'coc-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  private stepperForm_!: FormGroup;
  private attributesForm_!: FormArray;
  private professionForm_!: FormArray;
  private professionSkillsForm!: FormArray;
  private hobbyskillsForm!: FormArray;

  constructor(
    private formBuilder_: FormBuilder,
    private store: Store
  ) {
    this.initFormArray();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.refreshProfessions();
    }, 1);

  }

  private initFormArray(): void {
    this.stepperForm_ = this.formBuilder_.group({
      attributes: this.attributesForm_,
      profession: this.professionForm_,
      professinSkills: this.professionSkillsForm,
      hobbySkills: this.hobbyskillsForm
    });
  }

  refreshProfessions(): void {
    this.store.dispatch(new ProfessionsActions.FetchAll())
      .pipe(take(1))
      .subscribe(_ => this.store.dispatch(new ProfessionsActions.CalcPointsForAll()));
  }

}
