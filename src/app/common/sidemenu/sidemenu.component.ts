import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  
  private taskList: Array<object> = [{
    name : "Convert Gray Scale",
    code: "convertGrayscale"
  },{
    name: "Gaussian Blur",
    code: "gaussianBlur"
  },{
    name: "Canny",
    code: "canny"
  }];

  @Output() action = new EventEmitter<any>();
  constructor() { }

  onTaskClick(task) {
    this.action.emit(task.code);
  }

}
