import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VgrShapesMenuComponent } from './vgr-shapes-menu/vgr-shapes-menu.component';
import { VgrCanvasComponent } from './vgr-canvas/vgr-canvas.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VgrShapesMenuComponent,
    VgrCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
