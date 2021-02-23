import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';
import { ShareModule } from './share/share.module';
import { SheetComponent } from './sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    StepperComponent,
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule,
  ],

  providers: [
    ShareModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
