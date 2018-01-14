import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ContentComponent } from './app.contentcomponent';
import { MenuComponent } from './app.menucomponent';


@NgModule({
  declarations: [
    ContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentComponent, MenuComponent]
})
export class AppModule { }
