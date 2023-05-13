import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vgr-shapes-menu',
  templateUrl: './vgr-shapes-menu.component.html',
  styleUrls: ['./vgr-shapes-menu.component.css']
})
export class VgrShapesMenuComponent implements OnInit{
  selectedShape: string;
  selectedColor: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedShape = 'circle'; // Set initial shape selection
    this.selectedColor = 'red'; // Set initial color selection
  }

  drawShape(): void {
    this.router.navigate(['/canvas'], {
      state: { shape: this.selectedShape, color: this.selectedColor }
    });
  }
}
