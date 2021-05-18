import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { POINT_TYPE } from 'src/app/share/enums/point-type.enum';

@Component({
  selector: 'coc-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public pointTypes = POINT_TYPE;
  private stepperForm_!: FormGroup;
  private attributesForm_!: FormArray;
  private professionForm_!: FormArray;
  private professionSkillsForm!: FormArray;
  private hobbyskillsForm!: FormArray;

  constructor(
    private formBuilder_: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initFormArray();
  }

  private initFormArray(): void {
    this.stepperForm_ = this.formBuilder_.group({
      attributes: this.attributesForm_,
      profession: this.professionForm_,
      professinSkills: this.professionSkillsForm,
      hobbySkills: this.hobbyskillsForm
    });
  }


}
