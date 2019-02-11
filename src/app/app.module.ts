import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayCssDirective } from './directives/display-css.directive';
import { CustomComponent } from './components/custom/custom.component';
import { PersonService } from './components/person.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayCssDirective,
    CustomComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
