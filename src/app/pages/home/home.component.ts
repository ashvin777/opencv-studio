import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OpencvService } from '../../service/opencv/opencv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private image: any;
  private imageInitial: String = "data:image/jpeg;base64,";

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private opencvService: OpencvService, private el: ElementRef) { }

  private onTaskBarActions(action) {
    this.processImage(action);
  }

  private openImageUpload() {
    let event = new MouseEvent('click', { bubbles: true });
    this.fileInput.nativeElement.dispatchEvent(event);
  }

  private uploadImage(evt) {
    var tgt = evt.target || window.event.srcElement,
      files = tgt.files;

    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = () => {
        this.image = fr.result;
      }
      fr.readAsDataURL(files[0]);
    }

  }

  private processImage(method) {
    this.opencvService.processImage(method, this.image).subscribe((data) => {
      let response: any = JSON.parse(data["_body"]);
      this.image = this.imageInitial + response.body.image;
    }, error => console.log(error));
  }

}
