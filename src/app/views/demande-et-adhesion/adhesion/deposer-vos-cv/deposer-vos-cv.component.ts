import { Component } from '@angular/core';


@Component({
  selector: 'app-deposer-vos-cv',
  templateUrl: './deposer-vos-cv.component.html',
  styleUrls: ['./deposer-vos-cv.component.scss']
})

export class DeposerVosCvComponent {
  uploadedFiles: any[] = [];

  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

}
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
