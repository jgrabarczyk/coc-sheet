import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AttributeComponent } from './components/attribute/attribute-single/attribute.component';
import { AttributesSectionComponent } from './components/attribute/attributes-section/attributes-section.component';
import { ButtonPanelComponent } from './components/button-panel/button-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfessionsSectionComponent } from './components/professions-section/professions-section.component';
import { SkillComponent } from './components/skill/skill-single/skill.component';
import { SkillsSectionComponent } from './components/skill/skills-section/skills-section.component';
import { StatSectionComponent } from './components/stat/stat-section/stat-section.component';
import { StatComponent } from './components/stat/stat-single/stat.component';
import { MaterialModule } from './material.module';
import { ExtremePipe } from './pipes/extreme.pipe';
import { HalfPipe } from './pipes/half.pipe';


const pipes = [
  ExtremePipe,
  HalfPipe
];

const components = [
  AttributesSectionComponent,
  AttributeComponent,
  ButtonPanelComponent,
  NavbarComponent,
  ProfessionsSectionComponent,
  SkillsSectionComponent,
  SkillComponent,
  StatSectionComponent,
  StatComponent,
];
@NgModule({
  declarations: [
    pipes,
    components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    components,
    pipes,
    MaterialModule
  ]
})
export class ShareModule {
}
