import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './common/components/components.component';
import { HeaderComponent } from './common/header/header.component';
import { OutputComponent } from './pages/output/output.component';
import { SidemenuComponent } from './common/sidemenu/sidemenu.component';

import { F7Service } from './service/f7/f7.service';
import { OpencvService } from './service/opencv/opencv.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    HeaderComponent,
    OutputComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    F7Service,
    OpencvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private f7Service: F7Service) {
    f7Service.register();
  }
}
