import { Injectable } from '@angular/core';
import { F7 } from 'framework7/dist/js/framework7';

@Injectable()
export class F7Service {
  private application: F7;

  public register(): void {
    this.application = new F7({
      modalTitle: 'Framework7',
      material: true,
      pushState: true
    });
  }

  public getInstance(): F7 {
    return this.application;
  }
}
