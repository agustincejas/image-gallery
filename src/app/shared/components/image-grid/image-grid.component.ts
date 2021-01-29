import { Component, OnInit } from '@angular/core';
import { IPaginator } from '../../../core/interfaces/IPaginator';
import { ImagesService } from '../../../services/images.service';
import { CroppedImage, IPicture } from 'src/app/core/interfaces/IPicture';
import { forkJoin, pipe } from 'rxjs';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {

  images: CroppedImage[];
  paginator: IPaginator;
  slides: IPicture[];
  isDetailView = false;

  constructor(private imageService: ImagesService) {
    this.paginator = {
      pageSize: 10,
      pageIndex: 0,
      length: 0,
    };
    this.images = [];
    this.slides = [];
   }

  ngOnInit(): void {
    this.getImages(this.paginator);
  }

  getImages(paginator: IPaginator) {
    return this.imageService.getImages(paginator).subscribe(images => {
      this.images = images.pictures;
      this.paginator.length = images.pageCount * images.pictures.length;
      this.paginator.pageIndex = images.page;
      this.paginator.pageSize = images.pictures.length;
      this.getDetails(this.images);
    })
  }

  getDetails(croppedImages: CroppedImage[]) {
    forkJoin(
      croppedImages.map(image =>
        this.imageService.getImageDetail(image.id).subscribe(imagesData => {
          this.slides.push(imagesData);
        })
      )
    )
  }

  onPageChanged(event: IPaginator) {
    this.paginator = event;
    this.getImages(this.paginator);
  }

  showCarousel(id: string) {
    this.isDetailView = true;
  }
}
