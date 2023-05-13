import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTool: string;

  selectTool(tool: string) {
    this.selectedTool = tool;
  }

  drawTool(tool: string) {

  }
}
