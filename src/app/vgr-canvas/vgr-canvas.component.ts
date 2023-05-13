import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vgr-canvas',
  templateUrl: './vgr-canvas.component.html',
  styleUrls: ['./vgr-canvas.component.css']
})
export class VgrCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = 'blue';
      this.drawLine(context);
      this.drawCircle(context);
    }
  }

  private drawLine(context: CanvasRenderingContext2D) {
    let drawingLine = false;

    window.addEventListener("mousedown", (evt) => {
      drawingLine = true;
    });

    window.addEventListener("mouseup", (evt) => {
      drawingLine = false;
      context.beginPath();
    });

    window.addEventListener("mousemove", (evt) => {
      if(!drawingLine) return;

      // Adjust the starting position as per screen width
      /*const adjustPos = this.myCanvas.nativeElement.getBoundingClientRect();
      context.fillRect(evt.clientX - adjustPos.left, evt.clientY - adjustPos.top, 10, 10);*/

      context.lineWidth = 5;
      context.lineTo(evt.clientX, evt.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(evt.clientX, evt.clientY);
    });
  }

  private drawCircle(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(300, 100, 80, (Math.PI / 180) * 0, (Math.PI / 180) * 360);
    context.stroke();
    context.fill();
  }

}
