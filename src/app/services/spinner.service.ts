
import { Injectable } from '@angular/core';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerComponent!: SpinnerComponent;

  constructor() { }

  setSpinner(spinner: SpinnerComponent) {
    this.spinnerComponent = spinner;
  }

  show() {
    this.spinnerComponent.show();
  }

  hide() {
    this.spinnerComponent.hide();
  }
}