import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { AttributeComponent } from './sheet/components/attribute/attribute.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';
import { SkillComponent } from './sheet/components/skill/skill.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { StatComponent } from './sheet/components/stat/stat.component';
import { HalfPipe } from './pipes/half.pipe';
import { ExtremePipe } from './pipes/extreme.pipe';

const material = [
  BrowserAnimationsModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule
];
@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    AttributeComponent,
    SkillComponent,
    StatComponent,
    HalfPipe,
    ExtremePipe
  ],
  imports: [
    material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
