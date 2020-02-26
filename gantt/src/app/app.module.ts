import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SommetComponent } from './forme/sommet/sommet.component';
import { ArcComponent } from './forme/arc/arc.component';

@NgModule({
  declarations: [
    AppComponent,
    SommetComponent,
    ArcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
