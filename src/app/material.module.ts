import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatProgressSpinnerModule,
        MatCardModule,
        MatPaginatorModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatCardModule,
        MatPaginatorModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
