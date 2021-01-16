import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SheetComponent } from './sheet/sheet.component';
import { AttributeComponent } from './sheet/components/attribute/attribute.component';
import { SkillComponent } from './sheet/components/skill/skill.component';
import { StatComponent } from './sheet/components/stat/stat.component';

import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';

import { HalfPipe } from './share/pipes/half.pipe';
import { ExtremePipe } from './share/pipes/extreme.pipe';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { AttributesSectionComponent } from './share/components/attributes-section/attributes-section.component';
import { ProffesionsSectionComponent } from './share/components/proffesions-section/proffesions-section.component';

const material = [
  BrowserAnimationsModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule,
  MatStepperModule
];
@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    AttributeComponent,
    SkillComponent,
    StatComponent,
    HalfPipe,
    ExtremePipe,
    StepperComponent,
    NavbarComponent,
    AttributesSectionComponent,
    ProffesionsSectionComponent
  ],

  imports: [
    material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
