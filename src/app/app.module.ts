import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './new-form-stepper/components/stepper/stepper.component';
import { ShareModule } from './share/share.module';
import { SheetComponent } from './sheet/sheet.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SkillState } from './store/skills/skill.state';
import { ProfessionState } from './store/proffessions/proffessions.state';
import { AttributeState } from './store/attrubutes/attributes.state';

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
    NgxsModule.forRoot(
      [
        AttributeState,
        SkillState,
        ProfessionState
      ],
      {
        developmentMode: false,
        selectorOptions: {
          suppressErrors: environment.production,
          injectContainerState: false
        }
      }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],

  providers: [
    ShareModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
