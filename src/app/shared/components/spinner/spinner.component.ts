import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.setSpinner(this);
  }

  show(): void {
    this.isLoading = true;
  }

  hide(): void {
    this.isLoading = false;
  }
}
