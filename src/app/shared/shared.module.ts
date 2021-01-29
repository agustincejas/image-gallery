
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    SpinnerComponent,
    ImagePreviewComponent,
    ImageGridComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    SpinnerComponent,
    ImageGridComponent
  ]
})
export class SharedModule {}