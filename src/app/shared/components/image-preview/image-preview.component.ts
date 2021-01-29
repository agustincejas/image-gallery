import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CroppedImage } from 'src/app/core/interfaces/IPicture';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  @Input() image: CroppedImage | undefined;
  @Output() inDetailView = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
  }


  goToDetailView(id: string) {
    this.inDetailView.emit(id);
  }
}
