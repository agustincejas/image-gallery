import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGridComponent } from './shared/components/image-grid/image-grid.component';

const routes: Routes = [
  { path: '', component: ImageGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
