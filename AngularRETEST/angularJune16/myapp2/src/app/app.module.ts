import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { foodservice } from './FOOD/foodservice.services';
import { foodlistComponent } from './FOOD/foodlist.component';

@NgModule({
  declarations: [
    AppComponent,foodlistComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [foodservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
