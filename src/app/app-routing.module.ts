import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { VgrCanvasComponent } from './vgr-canvas/vgr-canvas.component';
import { VgrShapesMenuComponent } from './vgr-shapes-menu/vgr-shapes-menu.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '', component: VgrShapesMenuComponent },
  { path: 'menu', component: VgrShapesMenuComponent },
  { path: 'canvas', component: VgrCanvasComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
