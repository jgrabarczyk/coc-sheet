import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';
import { AttributesSectionComponent } from './share/components/attributes-section/attributes-section.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { ProfessionsSectionComponent } from './share/components/professions-section/professions-section.component';
import { SkillsSectionComponent } from './share/components/skills-section/skills-section.component';
import { ExtremePipe } from './share/pipes/extreme.pipe';
import { HalfPipe } from './share/pipes/half.pipe';
import { AttributeComponent } from './sheet/components/attribute/attribute.component';
import { SkillComponent } from './sheet/components/skill/skill.component';
import { StatComponent } from './sheet/components/stat/stat.component';
import { SheetComponent } from './sheet/sheet.component';
import { StatSectionComponent } from './share/components/stat-section/stat-section.component';

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
    ProfessionsSectionComponent,
    SkillsSectionComponent,
    StatSectionComponent
  ],

  imports: [
    material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
