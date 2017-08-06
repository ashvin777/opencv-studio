import { Component, AfterViewInit } from '@angular/core';
import { F7Service } from '../service/f7/f7.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  private f7Instance;
  constructor(private f7Service: F7Service) { }

  ngAfterViewInit() {
    this.f7Instance = this.f7Service.getInstance();
    this.f7Instance.addView('.view-main', {});
  }
}
